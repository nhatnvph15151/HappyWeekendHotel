import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { creat, remove, searchRoom, update, } from "../api/rooms";
import { ProductType } from "../types/products";

const useProducts = (slug: any) => {
    
    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR(slug ? `http://localhost:4000/api/rooms/${slug}` : "http://localhost:4000/api/rooms", fetcher);

    // create
    const add = async (item: ProductType) => {
        const products = await creat(item);
        mutate ([...data, products]);
    };
    const dele = async (id:any) => {
        await remove(id);
        mutate (data.filter((item: { _id: any; }) => item._id !== id ));    
    };

    const edit = async (item: ProductType) => {
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

export default useProducts;
