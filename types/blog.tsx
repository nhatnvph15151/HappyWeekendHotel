import { CategoryBlog } from "./categoryBlog";

export type Blog = {
    _id?: string;
    title: string;
    content: string;
    image: string;
    category: CategoryBlog;
    slug?: string;
}