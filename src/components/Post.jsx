export const Post = (props) => {
    const [title, post] = props
    return (
        <div className="w-screen">
            <div className="border border-solid border-blue-700  h-auto w-1/2 m-auto">
                <p className="text-white">{title}</p>
                <p className="text-white m-3">{post}</p>
                <div>
                    <button onClick={props.removePost} className="text-white rounded-md p-1 m-2 hover:border-red-700 border border-solid border-red-500">Excluir</button>
                    <button className="text-white border border-solid border-yellow-500 m-2 p-1 rounded-md " >Editar</button>
                </div>
            </div>
        </div>
    )
}