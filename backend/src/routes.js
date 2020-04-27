const { Router } = require('express');
const nodemailer = require('nodemailer');

const routes = Router();

routes.post('/', async (req, res) => {
	const { fromMail, toMail, subjectMail, textMail } = req.body;

	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		 	secure: false, // true for 465, false for other ports
		 	auth: {
		      user: '<yourgmail@gmail.com>', // generated ethereal user 
		      pass: '<yourpassword>' // generated ethereal password 
		 	},
		 tls:{
		     rejectUnauthorized: false
		 }
	});

	try {

		let info = await transporter.sendMail({
			from: `"Hello Men" <${fromMail}>`,
			to: toMail, // list of receivers
			subject: subjectMail, // Subject line
			text: textMail, // plain text body
			html: `<b>${textMail}</b>` // html body
		});

		return res.json({ message: info });

	} catch (err) {
		return res.json({ error: err });
	}

	
	
});

module.exports = routes;