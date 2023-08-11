import './header.css'
import Image from 'next/image'

export default function Encabezado (){
    return(
        <header ref="./"> 
            <Image width={50} height={50}src="/images/logob.png" alt="Imagen Logo" /> 
        </header>
    )
}