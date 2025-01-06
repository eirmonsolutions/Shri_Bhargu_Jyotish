const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.10:3000'];

// Middleware
app.use(bodyParser.json());
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eirmonsolutions06@gmail.com',
        pass: 'ppdmtrkadvhrloly',
    },
});

// Contact form endpoint
app.post('/send-email', (req, res) => {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !email || !service || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const mailOptions = {
        from: email,
        to: 'vishaleirmon15896@gmail.com',
        subject: `New Contact Form Submission: ${service}`,
        text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Service: ${service}
      Message: ${message}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Email sent successfully', info });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
