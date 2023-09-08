import { useContext } from "react"
import { DataContext } from '../contexts/DataContext'

export function Footer() {
    const context = useContext(DataContext)
    return (
        <footer className="text-white">
            <p>Total de posts {context.state.posts.length} </p>
        </footer>
    )
}