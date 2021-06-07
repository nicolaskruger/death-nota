import { useState } from "react";
import { useDeathNote } from "../../../hook";
import { Input } from "../input/input.component";
import "./write-line.css";

const WriteLine = () => {

    const { add } = useDeathNote();

    const [input, setInput] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        add(input);
    }

    return (
        < form onSubmit={handleSubmit} className="WriteLine Line" >
            <Input className="WriteLine__input" value={input} onChange={setInput} />
        </form >
    )
}

export { WriteLine }