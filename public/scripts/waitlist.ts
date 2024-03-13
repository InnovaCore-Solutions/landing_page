import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, nombre, mensaje} = req.body;


  // Configuración del transporte de correo
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "franmartinaguilar@gmail.com", // Cambia esto por tu dirección de correo electrónico
      pass: "kixf sofi ckvf ntxy", // Cambia esto por tu contraseña de correo electrónico
    },
  });

  // Configuración del correo electrónico
  const mailOptions = {
    from: 'franmartinaguilar@gmail.com', // Dirección de correo electrónico del remitente
    to: "franmartinaguilar@gmail.com", // Dirección de correo electrónico del destinatario
    subject: "Consulting ICS",
    text: `Correo enviado por: ${email}\nNombre: ${nombre}\nMensaje: ${mensaje}` , // Cuerpo del correo electrónico
  };

  // Envío del correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
      res.status(500).json({ error: "Error al enviar el correo electrónico" });
    } else {
      console.log("Correo electrónico enviado:", info.response);
      res.status(200).json({ message: "Correo electrónico enviado exitosamente" });
    }
  });
};

export default handler;
