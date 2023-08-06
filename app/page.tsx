import Image from 'next/image'
import styles from './page.module.css'
import Contenedor from './tarjetas/Contenedor'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Salvemos a las ballenas!</h1>
        <h2>Las ballenas en peligro de extision!</h2>
        <p></p>
        <Contenedor/>
      </div>
    </main>
  )
}
