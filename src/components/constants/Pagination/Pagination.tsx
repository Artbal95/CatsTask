import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { getCatsByLimitEffect } from "../../../store/effects/cat.effects"
import Buttons from "../Buttons/Buttons"
import c from "./Pagination.module.css"

const Pagination = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {activeCategory, activePage} = useAppSelector(state => state)

    const [limit, setLimit] = useState<number>(10)

    const handlerPrevPage = () => {
        if(activePage !== 1) {
            dispatch(getCatsByLimitEffect(activePage  - 1, limit, activeCategory))
        }
    }

    const handlerNextPage = () => {
        dispatch(getCatsByLimitEffect(activePage + 1, limit, activeCategory))
    }

    const handlerUploadNew = () => {
        dispatch(getCatsByLimitEffect(activePage, limit + 10, activeCategory))
        setLimit(prevState => prevState + 10)
    }

    return (
        <div className={c.Pagination}>
            <Buttons 
                label="Upload New"
                active={false}
                onClick={handlerUploadNew}
            />
            <div className={c.PaginationInner}>
                <div className={c.PaginationPrev}>
                    <Buttons 
                        label="Prev Page"
                        active={false}
                        onClick={handlerPrevPage}
                    />
                </div>
                <div className={c.PaginationDescription}>
                    Page: {activePage}
                </div>
                <div className={c.PaginationNext}>
                    <Buttons 
                        label="Next Page"
                        active={false}
                        onClick={handlerNextPage}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Pagination