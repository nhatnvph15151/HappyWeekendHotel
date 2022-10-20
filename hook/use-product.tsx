import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { creat, remove, update, } from "../api/rooms";
import { ProductType } from "../types/products";

const useProducts = () => {
    const router = useRouter();
    const { id } = router.query
    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR(id ? `http://localhost:4000/api/room/${id}` : "http://localhost:4000/api/rooms", fetcher);

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
