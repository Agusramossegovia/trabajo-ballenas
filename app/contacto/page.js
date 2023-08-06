import './contacto.css'

export default function Contacto (){
    return(
        <>
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
        <br/>

        <h2>ARGENTINA</h2>
            <p>Cuidad Autonoma de Buenos Aires
            <br/>
            Avenida siemprevivas 1234
            <br/>
            Tel:1122334455
            <br/>
            </p>
        <h2>COSTA ATLANTICA</h2>
            <p>Costa ATLANTICA
            <br/>
            Avenida Eva 567
            <br/>
            Tel:1166778899
            </p>
        </>
    )
}