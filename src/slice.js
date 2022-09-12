import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'socialConnect',
    initialState: {
        theme: 'light',
        likedPosts: []
    },
    reducers:{
        setThemeLight: state =>{
            state.theme = "light"
        },
        setThemeDark: state =>{
            state.theme = 'dark'
        },
        likePost: (state,action)=>{
            state.likedPosts.push(action.payload);
        },
        dislikePost: (state,action) =>{
            const index = state.likedPosts.indexOf(action.payload);
            if(index >= 0){
                state.likedPosts.splice(index,1)
            }
        }
    }
});

export const{ setThemeDark, setThemeLight, likePost, dislikePost} = slice.actions;
export default slice.reducer;