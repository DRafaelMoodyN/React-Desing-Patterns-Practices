import './App.css'

type TUsername = {
  username: string,
  email: string,
  isActivo?: boolean
}

// Buena práctica a seguir es agregar un prefijo I
// Una interfa se puede ampliar, implementar y fusionar

interface IUsername {
  username: string,
  email: string,
  isActivo?: boolean
}

// Extendiendo interfaz

interface IPerson extends IUsername {
  cedula: string
}

// Extendiento a type
type TPerson = TUsername & {
  cedula?: string
}

// Extender interfaz a type

type THijo = IPerson & {
  auto?: boolean
}

// Implementar interfaz y type
class CPerson implements IUsername {
  username = "drmoody"
  email = "email"
  isActivo = true
}

class CPersonCompuesto implements THijo {
  auto = false
  cedula = "notengo"
  username = "no tengo"
  email = "notengo"
  isActivo = false
}

function App() {

  function convertLatter(text: string): string {
    return text.toLowerCase()
  }

  const usuario: TUsername = {
    username: "David",
    email: "drmoodyn@gmail.com"
  }

  // Fucionar interfa

  interface IFuncion {
    username: string
  }

  interface IFuncion {
    email: string
  }

  const userFucion: IFuncion = {
    username: "david",
    email: "david"
  }


  // Enums
  //Las enumeraciones permiten a un desarrollador definir un conjunto de constantes

  // Namespaces
  // import styled from 'styled-components'

  // export namespace CSS {
  //   export const InputWrapper = styled.div`
  //   padding: 10px;
  //   margin: 0;
  //   background: white;
  //   width: 250px;
  //   `
  //   export const InputBase = styled.input`
  //   width: 100%;
  //   background: transparent;
  //   border: none;
  //   font-size: 14px;
  //   `
  // }



  return (
    <>
      <h1> Convercion {convertLatter("David Moody")}</h1>
      <h1> Usuario {convertLatter(usuario.username)}</h1>
      <h1> Email {convertLatter(usuario.email)}</h1>
      <h1> Usuario {convertLatter(usuario.username)}</h1>
      <h1> Email {convertLatter(usuario.email)}</h1>
    </>
  )
}

export default App
