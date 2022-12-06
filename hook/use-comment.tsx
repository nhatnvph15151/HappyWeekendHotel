import axios from "axios";
import useSWR from "swr";
import { create } from "../api/comment";
import { CommentType } from "../types/comment";

const useComment = (roomId: any) => {
    
    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR(roomId ? `http://localhost:4000/api/comments/${roomId}` : "http://localhost:4000/api/comments", fetcher);

    // create
    const add = async (commentData: CommentType) => {
        const comment = await create(commentData);
        const currentUser = JSON.parse(localStorage.getItem("user") as string);
        comment.user = currentUser;
        mutate([...data, comment]);
    };

    return {
        add,
        data,
        error
    };
};

export default useComment;
