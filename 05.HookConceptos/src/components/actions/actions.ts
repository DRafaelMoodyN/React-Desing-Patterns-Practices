
export type TCounterAction =
    { type: 'increment', payload: { value: number } } |
    { type: 'reset' }


export const doIncrement = (value: number): TCounterAction => {
    return {
        type: "increment",
        payload: { value: value }
    }
}

export const doReset = (): TCounterAction => ({
    type: "reset"
})

