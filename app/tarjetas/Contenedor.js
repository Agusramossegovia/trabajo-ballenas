import Tarjeta from "./Tarjeta"
import './Contenedor.css'
import animal from './data_tarjetas.json'

export default function ContenedorTarjeta (){
    return(
    <div classeName='contenedor'>
    <h2>Especies en peligro de extinsión</h2>

    <div className="grilla">
        {animal.map(elemento => (
            <Tarjeta key={elemento.id} animal={elemento} />
        ))}

    </div>
    </div>
    )
}