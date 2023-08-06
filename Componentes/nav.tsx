import Link from 'next/link';
import './nav.css';

export default function Nav () {
    return(
        <nav className='nav'>
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