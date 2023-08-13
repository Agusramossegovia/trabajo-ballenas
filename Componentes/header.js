import 'header.css'

export default function Encabezado (){
    return(
        <header ref="./"> 
            <h1 className="title">Salvemos a las Ballenas </h1>
            <img src="/images/logob.png" alt="Imagen Logo" /> 
        </header>
    )
}