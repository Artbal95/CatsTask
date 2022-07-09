import c from "./Buttons.module.css"

interface IButtonsProps {
    label: string
    active: boolean
    onClick?: () => void
}

const Buttons = ({label, active, onClick}: IButtonsProps): JSX.Element => {
    return (
        <button className={`${c.Buttons} ${active ? c.Active : ""}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Buttons