import Image from 'next/image'
import Layaout from '@/components/layaout'
import styles from '../styles/nosotros.module.css'
export default function Nosotros (){
    return (
        <Layaout
            title={'Nosotros'}
            description='Sobre nosotros, guitarLA, tienda de musica'
        >
        <main className='contenedor'>
            <h1 className='heading'>Nosotros</h1>

            <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg'width={1000} height={800} alt='Imagen sobre
                 nostros'/>


                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed erat vel orci porttitor accumsan. Vestibulum fermentum tristique tincidunt.
                        Nulla mollis eleifend odio, id interdum tortor mollis sit amet. Phasellus vestibulum hendrerit luctus. Maecenas eu vestibulum ligula. 
                        Praesent ornare blandit erat, quis fermentum est elementum eu.  
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed erat vel orci porttitor accumsan. Vestibulum fermentum tristique tincidunt.
                        Nulla mollis eleifend odio, id interdum tortor mollis sit amet. Phasellus vestibulum hendrerit luctus. Maecenas eu vestibulum ligula. 
                        Praesent ornare blandit erat, quis fermentum est elementum eu. 
                    </p>
                </div>
            </div>
        </main>
        </Layaout>
    )
}
