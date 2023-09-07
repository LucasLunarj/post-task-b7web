import { DataContext } from "../contexts/DataContext"
import { Header } from "./Header"
import { Post } from './Post'

import { useContext } from "react"


export const Page = () => {
    const context = useContext(DataContext)
    console.log(context.state.posts)

    return (
        <div className="bg-black w-full h-screen">
            <>

                <div className="flex flex-col items-center justify-center gap-20">
                    <Header />
                    {context.state.posts.map((item) => <Post key={item.id} />)}
                </div>

            </>
        </div>
    )
}