import { Action, State } from "..";
import { People } from "../../types";

const toggle = (state: State, action: Action): State => {

    const { peoples } = state;

    const id = action.id as number;

    const newList = peoples.map((people): People => people.id === id ? { ...people, kill: !people.kill } : people);

    return {
        ...state,
        peoples: newList
    }

}

export { toggle }