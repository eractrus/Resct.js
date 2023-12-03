
import { useEffect, useState } from "react"

function Home() {

    const [usuario, setUsuario] = useState('')

    useEffect(() => {
        const getNome = localStorage.getItem('@Usuario')

        if (!getNome) {
            window.localStorage.href='/'
        } else {

            setUsuario(getNome)
        }
    }, [])

    return (
        <h1>Bem-vindo {usuario}</h1>
    )
}

export default Home