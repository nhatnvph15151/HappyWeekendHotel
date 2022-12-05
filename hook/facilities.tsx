import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { creat, remove, update } from "../api/blog";
import { creatfac, removefac, updatefac } from "../api/facilities";
import { Blog } from "../types/blog";
import { facilities } from "../types/fac";

const useFacilities = (slug: any) => {

    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR(slug ? `http://localhost:4000/api/facilities/${slug}` : "http://localhost:4000/api/facilities", fetcher);

    // create
    const add = async (item: facilities) => {
        const fac = await creatfac(item);
        mutate([...data, fac]);
    };
    // delete
    const dele = async (id: any) => {
        await removefac(id);
        mutate(data.filter((item: { _id: any; }) => item._id !== id));
    };
    // update
    const edit = async (item: facilities) => {
        await updatefac(item);
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

export default useFacilities;
