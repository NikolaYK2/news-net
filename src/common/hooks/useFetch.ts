import {GetPostsType, postApi} from "@/features/post/api/postApi";
import {useEffect, useState} from "react";

export const useFetch = (endpoint?: string, query?: any) => {
  const [data, setData] = useState<GetPostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await postApi.getPosts();
      setData(res.data);
      setIsLoading(false)
    } catch (e: any) {
      setError(e);
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, reFetch};
};
