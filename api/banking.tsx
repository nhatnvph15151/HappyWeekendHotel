import instance from "./instance";
import { OrderType } from "../types/order";
export const bangking = () => {
    const url = `payment/create-payment`;
    return instance.post(url)
}