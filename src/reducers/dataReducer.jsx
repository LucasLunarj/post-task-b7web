import { v4 as uuidv4 } from 'uuid';

export let initialState =
{
    posts: [],
    newTitleContent: '',
    newPostContent: ''
}




export const reducer = (state, action) => {
    switch (action.type) {
        case 'postContent':
            {
                return {
                    posts: [...state.posts, { posts: { id: uuidv4(), title: state.newTitleContent, post: state.newPostContent } }]
                }
            }
        case 'getTitle':
            return { ...state, newTitleContent: action.payload }
        case 'getContent':
            return { ...state, newPostContent: action.payload }
        default: throw new Error()
    }
}

