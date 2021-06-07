
import { HTMLAttributes } from 'react'
import logo from './death-note.png'



const DeathNoteIcon = (pros: HTMLAttributes<HTMLImageElement>) => (
    <img {...pros} src={logo} />
)

export { DeathNoteIcon }