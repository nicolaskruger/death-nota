import { useDeathNote } from "../../../hook"
import { People } from "../../../types";
import { Line } from "../line/line.componnent";
import { WriteLine } from "../write-line/write-line.component"
import "./page.css"

type PageProps = {
    content: People[]
}

const Page = ({ content }: PageProps) => {


    let list = content.map(peopel => <Line people={peopel} />)

    const fill = 'a'.repeat(40 - list.length)
        .split('')
        .map(v => <WriteLine />)

    list = [...list, ...fill]

    return (
        <div className="Page">
            <div className="Page__div Page__left">
                {list.slice(0, 20)}
            </div>
            <div className="Page__div Page__rigth">
                {list.slice(20, 40)}
            </div>
        </div>
    )
}

export { Page }