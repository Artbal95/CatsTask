import { useEffect } from "react"
import CategoriesSection from "../components/CategoriesSection/CategoriesSection"
import CatsSection from "../components/CatsSection/CatsSection"
import { useAppDispatch } from "../hooks"
import { getCatsByLimitEffect } from "../store/effects/cat.effects"

const CatPage = (): JSX.Element => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCatsByLimitEffect())
    })

    return (
        <>
            <CategoriesSection />
            <CatsSection />
        </>
    )
}

export default CatPage