import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { creat, remove, update } from "../api/blog";
import { Blog } from "../types/blog";

const useBlog = (slug: any) => {

    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR(slug ? `http://localhost:4000/api/blogs/${slug}` : "http://localhost:4000/api/blogs", fetcher);

    // create
    const add = async (item: Blog) => {
        const blogs = await creat(item);
        mutate([...data, blogs]);
    };
    // delete
    const dele = async (id: any) => {
        await remove(id);
        mutate(data.filter((item: { _id: any; }) => item._id !== id));
    };
    // update
    const edit = async (item: Blog) => {
        await update(item);
        mutate();
    };

    return {
        edit,
        add,
        dele,
        data,
        error
    };
};

export default useBlog;
