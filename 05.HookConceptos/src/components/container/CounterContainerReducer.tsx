import { FC } from "react"
import { CounterPresentation } from "../presentation/CounterPresentation"
import { ReducerCounter } from "../hook/ReducerCounter"

type containerproperty = {
    initial?: number
}

const CounterContainerReducer: FC<containerproperty> = () => {

    const { counter, previous, counterAumentar, counterReset } = ReducerCounter()

    const onClick = (value: number): void => {
        counterAumentar(value)
    }

    const onReset = (): void => counterReset()

    return (
        <>
            <CounterPresentation
                counter={counter}
                click={previous}
                onButtonClick={(value) => onClick(value)}
                onReset={onReset}
            />
        </>
    )
}

export {
    CounterContainerReducer
}