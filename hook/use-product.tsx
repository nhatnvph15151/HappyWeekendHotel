import axios from "axios";
import useSWR from "swr";
import { creat, remove, } from "../api/rooms";
import { ProductType } from "../types/products";

const useProducts = () => {
    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR("http://localhost:4000/api/rooms", fetcher);

    // create
    const add = async (item: ProductType) => {
        const products = await creat(item);
        mutate ([...data, products]);
    };
    const dele = async (id:any) => {
        await remove(id);
        mutate (data.filter((item: { _id: any; }) => item._id !== id ));    
    };

    // const edit = async (item: ProductType) => {
    //     const {data : products} = await update(item);
    //     return data;
    // };



    return {
        // edit,
        add,
        dele,
        data,
        error
    };
};

export default useProducts;
