import { DeathNoteIcon } from "../../../assets"
import "./close-book.css"

type CloseBookProps = {
    open: () => void
}

const CloseBook = (props: CloseBookProps) => {

    const { open } = props;

    return (
        <button onClick={open} className="CloseBook">
            <DeathNoteIcon className="CloseBook__img" />
        </button>
    )
}

export { CloseBook }