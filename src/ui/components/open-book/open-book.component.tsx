
import { useState } from "react";
import { NextIcon, PrevoiusIcon } from "../../../assets";
import { useDeathNote } from "../../../hook"
import { Page } from "../page/page.component"
import "./open-book.css"

const OpenBook = () => {

    const { page } = useDeathNote();

    const [currentPage, setCurrentPage] = useState(0);

    const { maxPage, content } = page(currentPage);

    const previousValid = () => currentPage > 0;

    const nextValid = () => currentPage < maxPage;

    const handleClickPrevious = () => {
        if (!previousValid())
            return;
        setCurrentPage(currentPage - 1);
    }

    const handleClickNext = () => {
        if (!nextValid())
            return;
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className="Out">
            <button className="Out__button" onClick={handleClickPrevious}>
                {previousValid() && <PrevoiusIcon />}
            </button>
            <div className="OpenBook">
                <Page content={content} />
            </div>
            <button className="Out__button" onClick={handleClickNext}>
                {nextValid() && <NextIcon />}
            </button>
        </div>
    )
}

export { OpenBook }