import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { Resend } from 'resend';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, nombre, mensaje } = req.body;
  const resend = new Resend('re_Ng8UgWvv_CUSdjdeuZxonuQSqm4zvZnWg');
  
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'franmartinaguilar@gmail.com',
      subject: 'Consulting ICS',
      html: `<p>Nombre: ${nombre}<br>Email: ${email}<br>Mensaje: ${mensaje}</p>`
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};


export default handler;
