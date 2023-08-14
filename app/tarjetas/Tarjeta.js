import './Tarjeta.css'


export default function Tarjeta ({animal}){
    
    return (
        <div className="ballena-extinsion">
            <img src={animal.imagen} alt=""/>
            <div className="extinsion-info">
                <h2>{animal.titulo}</h2>
                <p>{animal.descripcion}</p>
                <div className="extinsion-detalles">
                    <button className="masInfo">
                        {animal.masInfo}   
                        <a href=".informacion.js" />
                    </button>

                </div>
            </div>
        </div>
        )
}