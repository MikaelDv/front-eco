"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function Quarta() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            toast.error("Preencha todos os campos.")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_bh9ocd7", "template_deubtjj", templateParams, "rpWOPlTtgSx044PP3")
        .then(() => {
            toast.success("Mensagem enviada!")
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log(error)
        })
    }

    return (
        <div className='h-[50vh] flex items-center p-12  text-left gap-[1vw] justify-around' id='contato'>
            <div className=' flex flex-col gap-[1vw]'>
                <h1 className='font-[Abel] text-4xl text-[2vw]'>Entre em contato conosco!</h1>
                <p className='font-[Abel] text-2xl text-[1.25vw] w-[45vw]'>Tem alguma dúvida ou quer saber mais sobre como a energia solar pode transformar sua vida? Estamos aqui para ajudar! Preencha o formulário ao lado ou entre em contato pelo email:<br/> autocaredevs@outlook.com</p>
            </div>
            <div className="container w-[20vw]">
                <form className="form flex flex-col gap-[.5vw] w-[23vw] mt-[3vh]" onSubmit={sendEmail}>
                        <input 
                        className="input-contato text-[1vw]"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                        
                        <input 
                        className="input-contato text-[1vw]"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />

                        <textarea 
                        className="input-contato textarea resize-none h-[10vh] text-[1vw]"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />

                        <input className="font-[Abel] p-2 bg-white w-1/4 self-center text-[1vw] font-semibold cursor-pointer hover:scale-110 transition-all ease rounded-md" type="submit" value="Enviar" />
                    </form>
                </div>
        </div>
    )
}
