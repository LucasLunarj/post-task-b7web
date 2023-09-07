import { v4 as uuidv4 } from 'uuid';

export const initialState =
{
    posts: [{}],
    newTitleContent: '',
    newPostContent: ''
}




export const reducer = (state, action) => {
    switch (action.type) {
        case 'postContent':
            {
                console.log(state, 'show')
                return { ...state, id: uuidv4(), title: state.newTitleContent, post: state.newPostContent }

            }
        case 'getTitle':
            return { ...state, newTitleContent: action.payload }
        case 'getContent':
            return { ...state, newPostContent: action.payload }
        default: throw new Error()
    }
}

