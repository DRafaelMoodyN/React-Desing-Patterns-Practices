import { useState } from "react"
import { counterProperty } from "../../commons/property/counterProperty"

const UseCounter = ({ MAX_COUNTER = 10, INITIAL = 10 }) => {

    const [counterState, setCounterState] = useState<counterProperty>({
        counter: INITIAL,
        click: 0
    })

    const counterAumentar = (value: number): void => {
        setCounterState(x => ({
            counter: x.counter < MAX_COUNTER ? x.counter + value : 1,
            click: x.counter < MAX_COUNTER ? x.click + 1 : 0
        }))
    }

    return {
        counterAumentar,
        ...counterState
    }
}

export {
    UseCounter
}