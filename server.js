const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, prenom, email, subject, message } = req.body;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'outlook', // Utilisez le service de votre choix
        auth: {
            user: 'coulombeljeremynetbj@outlook.fr', // Remplacez par votre email
            pass: 'zamXih-zuchan-suznu9' // Remplacez par votre mot de passe
        }
    });

    const mailOptions = {
        to: 'coulombeljeremy@outlook.fr', // Remplacez par l'email de destination
        subject: "demande de contact - NetBJ",
        text: `Sujet: ${subject}\nNom: ${name}\nPrénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.redirect('http://127.0.0.1:5500');
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution à http://localhost:${port}/`);
});
