import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

export const Post = () => {
    const context = useContext(DataContext)


    return (
        <div className="w-screen">
            <div className="border border-solid border-blue-700  h-auto w-1/2 m-auto">
                <p className="text-white">{context.state.title}</p>
                <p className="text-white m-3">{context.state.post}</p>
            </div>
        </div>
    )
}