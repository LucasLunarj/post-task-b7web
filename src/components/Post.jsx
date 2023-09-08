export const Post = (props) => {
    return (
        <div className="w-screen">
            <div className="border border-solid border-blue-700  rounded-md p-2 h-auto w-1/2 m-auto">
                <p className="text-zinc-400">{props.title}</p>
                <p className="text-white m-3">{props.post}</p>

            </div>
        </div>
    )
}