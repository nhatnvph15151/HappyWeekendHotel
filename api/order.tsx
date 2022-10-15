import { OrderType } from "../types/order";
import instance from "./instance";


export const creatOrder = (item:OrderType)=>{
    const url = 'order'
    return instance.post(url,item)
}