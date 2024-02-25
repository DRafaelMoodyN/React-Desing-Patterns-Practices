import './App.css'
import { Fragment } from "react"
import RenderIf from './Condicional'


function App() {


  // return (
  //   <>
  //     <h1>hola</h1>
  //     <h1>hola</h1>
  //     <h1>hola</h1>
  //   </>
  // )

  // return (
  //   <Fragment>
  //     <h1>
  //       hola
  //     </h1>
  //   </Fragment>
  // )
  // return (

  //     <h1>
  //       hola
  //     </h1>

  // )


  // return [
  //   <li key="1">First item</li>,
  //   <li key="2">Second item</li>,
  //   <li key="3">Third item</li>
  // ]


  // Condicionales

  const isLogin = true

  const dataIsReandy = true
  const isAdmin = true
  const userHas = false


  const Element = () => <h1>Hello, world</h1>;

  const funValue = () => {
    return dataIsReandy && (isAdmin || userHas)
  }

  return (
    <>
      {/* <h1>hola {isLogin && 'HOLA'} </h1>
      <h1>hola {!isLogin ? 'HOLA' : "FALSE"} </h1> */}
      {
        dataIsReandy && (isAdmin || userHas) && <Element />
      }
      {
        funValue() && <Element />
      }
      {
        <RenderIf isTrue={dataIsReandy && (isAdmin || userHas)}>
          <Element />
        </RenderIf>
      }
    </>
  )
}

export default App
