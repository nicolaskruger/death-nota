import { useOpenBook } from "../../../hook";
import { CloseBook, OpenBook } from "../../components";

const DeathNote = () => {
    const [isOpen, open] = useOpenBook(false);

    const render = () => {
        return (
            isOpen ? <OpenBook />
                : <CloseBook open={open} />
        )
    }

    return (
        render()
    )
}

export { DeathNote }