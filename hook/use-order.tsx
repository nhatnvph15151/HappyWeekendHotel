import axios from "axios";
import useSWR from "swr";
import { detail } from "../api/order";

const OrderHook = () =>{
    const fetcher = (args: string) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR("http://localhost:4000/api/order", fetcher);
    return {
        data,
        error,
        mutate,

    }

}
export default OrderHook