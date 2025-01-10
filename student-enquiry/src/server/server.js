require("dotenv").config();
const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());

// Temporary storage for OTPs (for demo purposes only)
const OTP_STORAGE = {};
const OTP_EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

// Twilio configuration
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Generate and send OTP API
app.post("/generate-otp", async (req, res) => {
  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ message: "Email or Phone is required" });
  }

  // Generate a random 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  // Save OTP with expiration
  const key = email || phone;
  OTP_STORAGE[key] = {
    otp,
    expiresAt: Date.now() + OTP_EXPIRATION_TIME,
  };

  try {
    // Send OTP via email
    if (email) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
          user: "www.km23@gmail.com",
          pass: "tkagzjvgsguiwbzh",
        },
      });

      transporter.verify((error, success) => {
        if (error) {
          console.error("SMTP Connection Error:", error);
        } else {
          console.log("SMTP Connection Success:", success);
        }
      });

      await transporter.sendMail({
        from: "www.km23@gmail.com",
        to: "www.aps32@gmail.com, www.abhiverma23@gmail.com",
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
      });
    }

    // Send OTP via SMS
    if (phone) {
      await twilioClient.messages.create({
        body: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
      });
    }

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Error sending OTP" });
  }
});

// Verify OTP API
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body; // Now checking based on email

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const storedOTP = OTP_STORAGE[email];

  

  if (!storedOTP) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  if (storedOTP.otp === otp && Date.now() < storedOTP.expiresAt) {
    delete OTP_STORAGE[email]; // Clear OTP after successful validation
    return res.status(200).json({ message: "OTP verified successfully" });
  } else {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
