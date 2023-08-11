import Link from 'next/link'
import './nav.css'
import Image from 'next/image'

export default function Nav () {
    return(
        <nav className="nav">
            <image src="/image/Logo.png" width={50} height={50} alt="Logo"/>
            
            <ul className='nav-lista'>
                <li className='nav-item'>
                    <Link href='./'>Inicio</Link>
                </li>                
                <li className='nav-item'>
                    <Link href='./informacion'>Información</Link>
                </li>
                <li className='nav-item'>
                    <Link href='./nosotros'>Nosotros</Link>
                </li>
                <li className='nav-item'>
                    <Link href='./contacto'>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}