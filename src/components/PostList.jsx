import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/postSlice";
import PostItem from "./PostItem";

const PostList = () => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost());
    }, []);
    return (
        <>
            {posts.length ? (
                <div className="listUp">
                    <div className="list">
                        {posts.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default PostList;
