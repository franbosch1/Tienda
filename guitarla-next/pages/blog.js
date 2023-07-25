import Layaout from '@/components/layaout'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'
export default function Blog ({posts}){
    return (
        <Layaout
            title={'Blog'}
            description='Blog de musica, venta de guitarras, consejos, GuitarLA'
        >
        <main className='contenedor'>
            <h1 className='heading'>Blog</h1>
            <div className={styles.grid}>
                {posts?.map(post => (
                    <Post
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </main>
        </Layaout>
    )
}

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const {data: posts} = await respuesta.json()
    return {
        props: {
            posts
        }
    }
}