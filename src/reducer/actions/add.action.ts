import { Action, State } from "..";
import { People } from "../../types";

const add = (state: State, action: Action): State => {

    const name = action.name as string;

    const { peoples } = state;

    const newPeople: People = {
        id: Math.random(),
        name: name,
        kill: true
    }

    return {
        ...state,
        peoples: [...peoples, newPeople]
    }

}

export { add }