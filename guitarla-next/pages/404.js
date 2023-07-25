import Layaout from "@/components/layaout"
import Link from "next/link"


export default function Pagina404() {
  return (
    <Layaout
    title="Pagina no encontrada">
      <p className="error">Pagina no encontrada</p>
      <Link legacyBehavior href='/'>
        <a className="error-enlace">
            Ir a inicio
        </a>
      </Link>
    </Layaout>
  )
}
