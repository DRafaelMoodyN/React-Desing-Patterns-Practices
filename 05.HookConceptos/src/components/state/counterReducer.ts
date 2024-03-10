import { ICounterReducer } from "../interface/interface"
import { TCounterAction } from "../actions/actions"

export const counterReducer = (state: ICounterReducer, action: TCounterAction): ICounterReducer => {
    switch (action.type) {
        case "increment":
            return {
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            }
        case "reset":
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        default:
            return state
    }
}


// https://read.reduxbook.com/markdown/part1/04-action-creators.html