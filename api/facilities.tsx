import instance from "./instance";

export const listfac = (key: string) => {
    const url = `/facilities/${key}`;
    return instance.get(url)
}