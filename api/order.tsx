import { OrderType } from "../types/order";
import instance from "./instance";


export const creatOrder = (item:OrderType)=>{
    const url = 'order'
    return instance.post(url,item)
}
export const sendMail = (item:OrderType)=>{
    const url = 'order'
    return instance.post(url,item)
}

export const listOrder = () => {
    const url = 'order'
    return instance.get(url)
}

export const detail = (id:any|undefined) => {
    const url = `order/${id}`
    return instance.get(url)
}
export const listOrderUser = (id:any) => {
    const url = `orders/${id}`
    return instance.get(url)
}
export const update = (item:OrderType) => {
    const url = `order/${item._id}/edit`
    return instance.put(url, item)
}