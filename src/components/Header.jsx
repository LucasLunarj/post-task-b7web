import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"


export const Header = () => {
    const context = useContext(DataContext)


    function handleTitle(e) {
        return context.dispatch({ type: 'getTitle', payload: e.target.value })
    }

    function handleContent(e) {
        return context.dispatch({ type: 'getContent', payload: e.target.value })
    }

    function handleSend(event) {
        event.preventDefault()
        context.dispatch({ type: 'postContent' })
        context.dispatch({ type: 'getContent', payload: '' })
        context.dispatch({ type: 'getTitle', payload: '' })
    }

    return (
        <header className="text-white m-4">
            <p className="text-6xl text-center mb-10">Posts</p>
            <form onSubmit={handleSend} className="flex flex-col gap-2 text-black" action="">
                <input onChange={handleTitle} value={context.state.newTitleContent} type="text" placeholder="Assunto" />
                <textarea onChange={handleContent} value={context.state.newPostContent} name="" id="" cols="30" rows="7" placeholder="Escreva Aqui"></textarea>
                <input disabled={context.state.newTitleContent.length === 0 || context.state.newPostContent.length === 0} className="border border-solid border-blue-400 text-blue-200 rounded-md hover:border-blue-700 " type="submit" value="Enviar" />
            </form>
        </header>
    )
}