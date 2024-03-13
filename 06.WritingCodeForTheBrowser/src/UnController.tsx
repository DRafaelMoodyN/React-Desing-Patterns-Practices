import { FC, useState, ChangeEvent, FormEvent } from "react"


const UnController: FC = () => {

    type user = {
        nombre: string,
        apellido: string
    }

    const [valueState, setValueState] = useState<user>({
        nombre: " ",
        apellido: " "
    });

    // const handleChane = (e: ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }

    const handleDynamic = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValueState(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(valueState)
        // Realizar acciones relacionadas con el envío del formulario aquí
    };

    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input name="nombre" type="text" onChange={handleDynamic} />
                <button type="submit">Enviar</button>
                {
                    valueState.nombre
                }
            </form>
        </>
    )
}

export {
    UnController
}