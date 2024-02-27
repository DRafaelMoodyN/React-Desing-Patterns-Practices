import { FC } from "react"
import { CounterPresentation } from "../presentation/CounterPresentation"
import { UseCounter } from "../hook/UseCounter"

type containerproperty = {
    initial?: number
}

const CounterContainer: FC<containerproperty> = ({ initial = 15 }) => {

    const { click, counter, counterAumentar } = UseCounter(
        {
            MAX_COUNTER: 10,
            INITIAL: initial
        })

    const onClick = (value: number): void => {
        counterAumentar(value)
    }

    return (
        <>
            <CounterPresentation
                counter={counter}
                click={click}
                onButtonClick={(value) => onClick(value)
                } />
        </>
    )
}

export {
    CounterContainer
}