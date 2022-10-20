import { ProductType } from "../types/products";
import instance from "./instance";


export const remove = (_id:number) => {
    const url = `rooms/${_id}/delete`;
    return instance.delete(url)
}

export const getAll = () => {
    const url = `rooms`;
    return instance.get(url);
}
export const getone = (slug: any | undefined) => {
    const url = `rooms/${slug}`;
    return instance.get(url);
}

export const creat = (product: ProductType) => {
    const url = `rooms`;
    return instance.post(url, product)
}

export const update = (product: ProductType) => {
    const url = `rooms/${product._id}`;
    return instance.put(url, product)
}

