import { useReducer } from "react"
import { ICounterReducer } from "../interface/interface"
import { counterReducer } from "../state/counterReducer"
import { doIncrement, doReset } from "../actions/actions"

const INITIAL_STATE: ICounterReducer = {
    counter: 10,
    previous: 0,
    changes: 0
}

const ReducerCounter = () => {

    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const counterReset = (): void => {
        dispatch(doReset())
    }

    const counterAumentar = (value: number): void => {
        // dispatch({ type: 'increment', payload: { value: value } })
        dispatch(doIncrement(value))
    }

    return {
        counterAumentar,
        counterReset,
        ...state
    }
}

export {
    ReducerCounter
}