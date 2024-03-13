import axios from "axios";
import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { ButtonSend } from "./ButtonSend";
import { Alert } from './Alert';


export const ContactForm = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    id: string;
    isDarkMode:boolean;
  }
) => {
  const { id,isDarkMode, ...divProps } = props;

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertWarning, setShowAlertWarning] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const [showBorderName, setShowBorderName] = useState(false);
  const [showBorderEmail, setShowBorderEmail] = useState(false);
  const [showBorderMessage, setShowBorderMessage] = useState(false);

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verifica si los campos requeridos están vacíos
    // Si algún campo requerido está vacío, muestra una alerta y no envía el formulario
   
    if(!nombre){
      setShowBorderName(true);
    }
    if (!email){
      setShowBorderEmail(true); 
    }
    if(!mensaje) {
      setShowBorderMessage(true);
    }
    if(!nombre || !email || !mensaje){
      setShowAlertWarning(true);
      setTimeout(() => setShowAlertWarning(false), 5000);
      return;
    }
    // Si todos los campos requeridos están llenos, envía el formulario
    try{
      setEmailSubmitted(true);
      const res = await axios.post("/api/waitlist", { email, nombre, mensaje });
      console.log(res);
      setEmail("");
      setNombre("");
      setMensaje("");

      setShowBorderEmail(true);
      setShowBorderMessage(true);
      setShowBorderName(true);

      setShowAlertSuccess(true);
      setTimeout(() => setShowAlertSuccess(false), 5000);
    }
    catch{
      setShowAlertError(true);
      setTimeout(() => setShowAlertError(false), 5000);
    }
    
  };

  const EmailMessage = () => (
    <p className="z-20 mt-3 text-sm text-light">
      {emailSubmitted
        ? "Gracias por contactar con nosotros a través del formulario!!"
        : "Estamos aquí para ayudarte."}
    </p>
  );

  return (
    <div {...divProps} className={twMerge("col", "md:w-1/2", divProps.className)}>
      <form className="relative gap-2 md:gap-4" onSubmit={handleSubmit}>

        <div className="z-20 relative">
          <Input
            type="text"
            className={isDarkMode && showBorderName ? "w-full mb-10 " : "w-full mb-10 dark:border-gray-600"}
            aria-label="Your name/company"
            name="name-company"
            id={`${id}-name`}
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
          />
          <label
            htmlFor={id}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Tu Nombre o Compañía *
          </label>
          {/* Line beneath label to hide outline */}
          <div className="absolute top-0 w-[9.0rem] h-[2px] bg-strong left-3" />
        </div>

        <div className="z-20 relative">
          <Input
            type="email"
            className={isDarkMode && showBorderEmail ? "w-full mb-10 " : "w-full mb-10 dark:border-gray-600"}
            aria-label="Your email"
            name="email"
            id={`${id}-email`}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <label
            htmlFor={id}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Tu Email *
          </label>

          {/* Line beneath label to hide outline */}
          <div className="absolute top-0 w-[4rem] h-[2px] bg-strong left-3" />
        </div>

        <div className="z-20 relative">
          <TextArea
            className={isDarkMode && showBorderMessage ? "w-full mb-10" : "w-full mb-10 dark:border-gray-600"}
            aria-label="Mensaje"
            name="message"
            id={`${id}-message`}
            onChange={(event) => setMensaje(event.target.value)}
            value={mensaje}
          />
          <label
            htmlFor={`${id}-message`}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Mensaje *
          </label>
          <div className="absolute top-0 w-[4rem] h-[2px] bg-strong left-3" />
        </div>
         <ButtonSend type="submit" />
      </form>
      <EmailMessage />
      {showAlertSuccess && (
        <Alert type="success" message="¡Mensaje enviado correctamente! Gracias por ponerte en contacto." />
      )}
      {showAlertWarning && (
        <Alert type="warning" message="Por favor, asegúrate de completar todos los campos requeridos." />
      )}
      {showAlertError && (
        <Alert type="error" message="Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde." />
      )}

    </div>

  );
};