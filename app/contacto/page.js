'use client'
import './contacto.css'
import { useState } from 'react'
export default function Contacto (){
        const [numero, setNumero] = useState(0);

    return(
        <>
        <p>por ahora vamos: {numero}</p>
            <button onClik={() =>{setNumero(numero + 1)}}>
                sumar 1 al numero
            </button>

            <h1>Sumate a la organizacion</h1>
            <form action="./contacto/gracias" name="contacto" data-netlify="true" netlify-honeypot="boto-field" hidden>
                <input type='text' name='nombre'/>
                <input type='email' name='email'/>
                <textarea name='comentario'></textarea>
                
            </form>


            <form method='post' className='formulario'>
                <label>
                    Nombre:
                    <input type='text' name='nombre'/>
                </label>
                <label>
                    Mail:
                    <input type='email' name='email'/>
                </label>
                <label>
                    Comentarios:
                    <textarea name='comentario'></textarea>
                </label>

                <input type="hidden" name="form-name" value="contacto" />

                <button type='submit'>Enviar</button>
            </form>
 
        </>
    )
}