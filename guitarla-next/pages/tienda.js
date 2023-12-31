import Layaout from '@/components/layaout'
import Guitarra from '@/components/guitarra'
import styles from '../styles/grid.module.css'


export default function Tienda ({guitarras}){

    
    return (
        <Layaout
            title={'Tienda Virtual'}
            description='Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
        >
        <main className='contendor'>
            <h1 className='heading'>Nuestra Coleccion</h1>

            <div className={styles.grid}>
           {guitarras?.map(guitarra => (
                <Guitarra
                    key={guitarra.id}
                    guitarra={guitarra.attributes}
                />
           ))}
           </div>
        </main>
        </Layaout>
    )
}

/*export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
    return {
        props: {
            guitarras
        }
    }
}*/

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
    return {
        props: {
            guitarras
        }
    }
}