import './App.css'
import React, { ReactNode } from 'react'
import GeolocationContainer from './GeolocationContainer'
// type TUser = {
//   nombre: string,
//   apellido: string
// }


// function App() {

//   const Button = () => <button>Soy un button</button>

//   interface ButtonDynamicoProps {
//     children: ReactNode;
//   }

//   const ButtonDynamico: React.FC<ButtonDynamicoProps> = ({ children }) => (
//     <button className="btn">{children}</button>
//   );

//   const user: TUser = {
//     nombre: "David",
//     apellido: 'Moody'
//   }

//   return (
//     <>
//       <div>
//         <h1>{user.nombre}</h1>
//         <h1>{user.apellido}</h1>
//         <Button />
//         {/* No estamos limitando el componentef */}
//         <ButtonDynamico>
//           <Button />
//         </ButtonDynamico>

//       </div>
//     </>
//   )
// }


function App() {

  return (
    <>
      <GeolocationContainer />
    </>
  )
}

export default App
