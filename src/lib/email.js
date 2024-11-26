const nodemailer = require('nodemailer')

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const sendEmail = async (data) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Te quieren contactar desde tu página web',
    text: `Nombre: ${data.name}\nCorreo: ${data.email}\nMensaje: ${data.infoTextArea}`
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Correo enviado con éxito')
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}

module.exports = sendEmail
