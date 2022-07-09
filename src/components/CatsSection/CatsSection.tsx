import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks"
import { CatsDataType } from "../../types/types"
import Cards from "../constants/Cards/Cards"
import Loading from "../constants/Loading/Loading"
import Pagination from "../constants/Pagination/Pagination"

import c from "./CatsSection.module.css"

const CatsSection = (): JSX.Element => {

    const {cats, loadingCats} = useAppSelector(state => state)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if(!loadingCats){
            setTimeout(() => {
                setIsLoading(false)
            }, 1500)
        }else{
            setIsLoading(true)
        }
    }, [loadingCats])

    return (
        <div className={c.CatsSection}>
            <div className={c.Pagination}>
                <Pagination />
            </div>
            <div className={c.CatsSectionInner}>
            {
                isLoading ? ( 
                    <Loading />
                    ) :
                    cats.map(({id, url}: CatsDataType, index: number) => (
                        <Cards 
                            key={id + index}
                            image={url}
                        />   
                    ))
            }
            </div>
        </div>
    )
}

export default CatsSection