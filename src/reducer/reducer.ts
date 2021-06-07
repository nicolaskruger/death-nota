import { Action, ActionType, EnumOper, State } from ".";
import { add, toggle } from "./actions";

const reducer = (state: State, action: Action): State => {


    const { ADD, TOGGLE } = ActionType;

    const { type } = action;

    const enumOper: EnumOper = {
        [ADD]: add,
        [TOGGLE]: toggle
    }

    return enumOper[type](state, action);
}

export { reducer }