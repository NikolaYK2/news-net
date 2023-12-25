import {instance} from "@/common/api/instans";


export type GetPostsType = {
  id: string,
  title:string,
  imageUrl:string,
  text:string
  createdAt:number,
}

export const postApi = {
  getPosts() {
    return instance.get<GetPostsType[]>(`posts/`)
  },
  getPost(id:string) {
    return instance.get<GetPostsType>(`posts/${id}`)
  },
}