import axios from "axios";
import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export const ContactForm = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    id: string;
  }
) => {
  const { id, ...divProps } = props;

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email , nombre, mensaje});
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  const EmailMessage = () => (
    <p className="mt-3 text-sm text-light">
      {emailSubmitted
        ? "Gracias por contactar con nosotros a través del formualrio!!"
        : "Estamos aquí para ayudarte."}
    </p>
  );

  return (
    <div {...divProps} className={twMerge("col","md:w-1/2", divProps.className)}>
      <form className="relative gap-2 md:gap-4" onSubmit={handleSubmit}>

        <div className="relative">
          <Input
            type="text"
            className="w-full mb-10"
            placeholder="Fran / InnovaCore Solutions"
            aria-label="Your name/company"
            name="name-company"
            id={`${id}-name`}
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
            required
          />
          <label
            htmlFor={id}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Tu Nombre o Comapñia
          </label>
          {/* Line beneath label to hide outline */}
          <div className="absolute top-0 w-[8.5rem] h-[2px] bg-strong left-3" />
        </div>

        <div className="relative">
          <Input
            type="email"
            className="w-full mb-10"
            placeholder="example@example.com"
            aria-label="Your email"
            name="email"
            id={`${id}-email`}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <label
            htmlFor={id}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Tu Email
          </label>
          
          {/* Line beneath label to hide outline */}
          <div className="absolute top-0 w-[3.5rem] h-[2px] bg-strong left-3" />
        </div>

        <div className="relative">
          <TextArea
            className="w-full mb-10"
            placeholder="Mensaje"
            aria-label="Mensaje"
            name="message"
            id={`${id}-message`}
            onChange={(event) => setMensaje(event.target.value)}
            value={mensaje}
            required
          />
          <label
            htmlFor={`${id}-message`}
            className="absolute z-10 text-xs -top-2 left-4 text-light"
          >
            Mensaje
          </label>
          <div className="absolute top-0 w-[3.5rem] h-[2px] bg-strong left-3" />
        </div>

        <Button type="submit">Enviar</Button>
      </form>
      <EmailMessage />
    </div>
    
  );
};
