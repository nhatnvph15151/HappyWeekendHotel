import instance from "./instance";


export const getone = (id:string) => {
    const url = `basic/${id}`
    return instance.get(url)
}