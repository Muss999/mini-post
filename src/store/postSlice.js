import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("posts/getPost", async () => {
    let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
});

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.posts = action.payload;
            console.log(action.payload);
        });
    },
});

export default postSlice.reducer;
