'use client'
import './contacto.css'
import { useState } from 'react'

export default function Contacto (){

        const [numero, setNumero] = useState(500);

    return(
        <> 
            <h2>Apoyo a la preservacion de ballenas!</h2>

                <h3>Vamos por la firma:{numero}</h3>

                    <button onClick={() => {setNumero(numero +1)}}>
                        Firmo!
                    </button>

                <br/>

                    <p>Cuando juntemos 100.000.000 firma, podremos presentar un proyecto para que se lleve a cabo en las ciudades de todo el pais. El proyecto se trata de educacion ambiental.</p>

                <br/>

            <h2>Sumate a la organizacion</h2>
            
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