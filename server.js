const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());


const allowedOrigins = [
    'http://localhost:3000',
    'https://shribhargujyotish.com',

];

// Middleware
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Replace with your Hostinger SMTP host
    port: 465, // Use 465 for secure connection or 587 for startTLS
    secure: true, // true for port 465, false for other ports
    auth: {
        user: 'info@shribhargujyotish.com', // Your email
        pass: 'Panditji@215', // Your email password
    },
});


app.post('/send-email', async (req, res) => {
    try {
        const { name, phone, email, service, message } = req.body;

        if (!name || !phone || !email || !service || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Configure email options
        const mailOptions = {
            from: 'info@shribhargujyotish.com',
            to: 'info@shribhargujyotish.com',
            subject: 'New Contact Form Submission',
            text: `
                You have received a new message:
                Name: ${name}
                Phone: ${phone}
                Email: ${email}
                Service: ${service}
                Message: ${message}
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Email sent successfully.' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
