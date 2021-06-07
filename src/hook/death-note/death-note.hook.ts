import { useContext } from "react"
import { Action, ActionType } from "../../reducer";
import { People } from "../../types";
import { DeathNoteContext } from "../context/deaf-note.context"

type Pageble = {
    currPage: number,
    maxPage: number,
    content: People[]
}

const maxLinesForPage = 40;

const useDeathNote = () => {
    const [state, dispatch] = useContext(DeathNoteContext);

    const { ADD, TOGGLE } = ActionType;

    const add = (name: String) => {
        const action: Action = {
            name: name,
            type: ADD
        }

        dispatch(action);
    }

    const toggle = (id: number) => {
        const action: Action = {
            id: id,
            type: TOGGLE
        }

        dispatch(action);
    }



    const page = (num: number): Pageble => {

        const { peoples } = state;

        const { length } = peoples;

        const pages = length / maxLinesForPage;

        const pageRest = length % maxLinesForPage;

        const maxPage = Math.ceil(pages + (pageRest === 0 ? 0 : 1));

        const newList = peoples.slice(num * maxLinesForPage, num * maxLinesForPage + maxLinesForPage);

        return {
            currPage: num,
            maxPage: maxPage,
            content: newList
        }
    }
    return {
        state,
        toggle,
        add,
        page
    }
}

export { useDeathNote }