import Image from 'next/image'
import styles from './page.module.css'
import Contenedor from './tarjetas/Contenedor'

export default function Home() {
  return (
    <>
        <h2>Las ballenas en peligro de extision!</h2>
        <p>En el mundo hay muchas especies en peligro de extision lamentablemente. En este sitio se puede ver los diferentes tipo de ballenas que se encuentran en peligro de extinsion.</p>
        <br/>
        <Contenedor/>
        <p></p>
  </>
  )
}
