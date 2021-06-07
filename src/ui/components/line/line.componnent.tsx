
import { useDeathNote } from "../../../hook";
import { People } from "../../../types"
import "./line.css"

type LineProps = {
    people: People
}

const Line = ({ people }: LineProps) => {

    const { name, id, kill } = people;

    const { toggle } = useDeathNote();

    const hadleClick = () => {
        toggle(id)
    }

    return (
        <div onClick={hadleClick} className={`Line ${!kill && "risk"}`}>
            {name}
        </div>
    )
}

export { Line }