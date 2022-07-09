import { useAppDispatch, useAppSelector } from "../../hooks"
import { getCatsByLimitEffect } from "../../store/effects/cat.effects"
import { CategoriesType } from "../../types/types"

import Buttons from "../constants/Buttons/Buttons"

import c from "./CategoriesSection.module.css"


const CategoriesSection = (): JSX.Element => {

    const {categories, activeCategory, activePage} = useAppSelector(state => state)

    const dispatch = useAppDispatch()

    const handlerChangeActiveCategory = (activeId: number) => {
        dispatch(getCatsByLimitEffect(activePage, 10, activeId))
    }

    return (
        <div className={c.CategoriesSection} >
            <h2>Categories</h2>
            <div className={c.Categories}>
                {
                    categories.map(({id, name}: CategoriesType, index: number) => (
                        <Buttons 
                            key={id + index + name}
                            label={name}
                            active={activeCategory === id}
                            onClick={() => handlerChangeActiveCategory(id)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesSection