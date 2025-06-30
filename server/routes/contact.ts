import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Salo Coffee <info@salosalocoffee.com>",
      to: "info@salosalocoffee.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;