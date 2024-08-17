"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormLabel from "../molecules/FormLabel";
import FormHeader from "../molecules/FormHeader";
import TextArea from "../atoms/TextArea";

const ContactForm: React.FC = () => {
  const [name, setUsername] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Manejo del envío del formulario
    console.log("Name:", name);
    console.log("Password:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="mb-4 rounded bg-white px-8 pb-8 pt-6"
        onSubmit={handleSubmit}
      >
        <FormHeader
          title="Contacto"
          subtitle="Ponte en contacto con nuestros especialistas"
          className="mb-4"
        />
        <FormLabel
          label="Nombre"
          name="Name"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Escribe tu nombre"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormLabel>
        <FormLabel
          label="Apellido"
          name="lastName"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          <Input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Escribe tu apellido"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormLabel>
        <FormLabel
          label="Correo"
          name="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Escribe tu correo electrónico"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormLabel>
        <FormLabel
          label="Mensaje"
          name="message"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          <TextArea
            value={message}
            onChange={handleMessageChange}
            placeholder="Escribe tu mensaje"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            rows={3}
            cols={50}
          />
        </FormLabel>
        <Button
          type="submit"
          className="w-full rounded bg-red-600 px-4 py-6 font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
