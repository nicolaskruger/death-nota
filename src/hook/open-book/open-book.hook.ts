import { useState } from "react"

type OpenBookReturn = [boolean, () => void]

const useOpenBook = (state: boolean): OpenBookReturn => {
    const [open, setOpen] = useState(state);

    const openOper = () => {
        setOpen(true);
    }

    return [
        open,
        openOper
    ]
}

export { useOpenBook }