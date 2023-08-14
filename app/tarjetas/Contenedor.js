import Tarjeta from "./Tarjeta"
import './Contenedor.css'
import animal from './data_tarjetas.json'

export default function ContenedorTarjeta (){
    return(
    <div classeName='contenedor'>
        <h3>Especies en peligro de extinsión</h3>
            <div className="grilla">
                {animal.map(elemento => (
                    <Tarjeta key={elemento.id} animal={elemento}/>
                ))}
            </div>
    </div>
    )
}