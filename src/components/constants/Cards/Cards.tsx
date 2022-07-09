import c from "./Cards.module.css"

interface ICardsProps {
    image: string
}

const Cards = ({image}: ICardsProps): JSX.Element => {
    return (
        <div className={c.Cards}>
            <img src={image} alt="" width={"100%"} height={"100%"}/>
        </div>
    )
}

export default Cards