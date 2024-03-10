import { CounterContainer } from "./components/container/CounterContainer"
import { CounterContainerReducer } from "./components/container/CounterContainerReducer"

function App() {

  return (
    <>
      <h1>UseState</h1>
      <CounterContainer />
      <h1>UseReducer</h1>
      <CounterContainerReducer />
    </>
  )
}

export default App
