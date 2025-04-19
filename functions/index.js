const { onRequest } = require('firebase-functions/v2/https');
const { logger } = require('firebase-functions/v2'); // Use v2 logger
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'gmail', // Consider SendGrid/Mailgun
    auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS  // Use environment variables
    }
});

exports.sendEmail = onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.status(204).send('');
        return;
    }

    try {
        // ----------------------------------------------------
        // Input Validation (CRUCIAL!)
        // ----------------------------------------------------
        const { firstName, lastName, email, ipn, amount } = req.body;

        if (!firstName || !lastName || !email || !ipn || !amount) {
            logger.error('Missing required fields in request body.');
            res.status(400).send({ error: 'Missing required fields' });
            return;
        }

        // Sanitize and validate (Example - adjust to your needs!)
        const sanitizedFirstName = firstName.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
        const sanitizedLastName = lastName.replace(/<[^>]*>?/gm, '');
        const sanitizedEmail = email.trim().toLowerCase(); // Basic sanitization
        const sanitizedIpn = ipn.replace(/[^0-9]/g, ''); // Allow only digits
        const sanitizedAmount = amount.replace(/[^0-9.]/g, ''); // Allow only digits and dots

        // Basic email validation (you might want a better library)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
            logger.error(`Invalid email address: ${sanitizedEmail}`);
            res.status(400).send({ error: 'Invalid email address' });
            return;
        }

        // ----------------------------------------------------

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Нова заявка з форми',
            html: `
        <h2>Нова заявка з форми</h2>
        <p><strong>Ім'я:</strong> ${sanitizedFirstName}</p>
        <p><strong>Прізвище:</strong> ${sanitizedLastName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>ІПН:</strong> ${sanitizedIpn}</p>
        <p><strong>Сума угоди:</strong> ${sanitizedAmount}</p>
      `
        };

        await transporter.sendMail(mailOptions);
        logger.info('Email sent successfully'); // Use logger
        res.status(200).send({ message: 'Email sent successfully' });

    } catch (error) {
        logger.error('Error sending email:', error); // Log the full error
        res.status(500).send({ error: 'Failed to send email', details: error.message }); // Send error message
    }
});