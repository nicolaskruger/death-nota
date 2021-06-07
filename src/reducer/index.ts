import { EnumDictionary, People } from "../types"

enum ActionType {
    ADD,
    TOGGLE
}

type State = {
    peoples: People[]
}

type Action = {
    type: ActionType,
    name?: String;
    id?: number
}

type EnumOper = EnumDictionary<ActionType, (state: State, action: Action) => State>

const defState: State = {
    peoples: []
}

export { ActionType, defState }
export type { State, Action, EnumOper }