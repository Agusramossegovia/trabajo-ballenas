
export default function Evento (){
    function apoyo (){
        alert('Gracias por apoyarnos!')
    }
    return (
        <div>
            <button onClick={apoyo}>
            Apoyo a las ballenas!
            </button>

        </div>
    )
}