import { DataContext } from "../contexts/DataContext"
import { Header } from "./Header"
import { Post } from './Post'

import { useContext } from "react"


export const Page = () => {
    const context = useContext(DataContext)
    console.log(context.state.posts.post)
    function handleRemove(id) {
        console.log(id)
    }
    return (
        <div className="bg-black w-full h-full">
            <>

                <div className="flex flex-col items-center justify-center gap-2 ">
                    <Header />
                    {context.state.posts.map((item) => <Post key={item.posts.id} title={item.posts.title} post={item.posts.post} removePost={() => handleRemove(item.posts.id)} />)}
                </div>

            </>
        </div>
    )
}