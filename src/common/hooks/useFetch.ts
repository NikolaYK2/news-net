import {GetPostsType} from "@/features/post/api/postApi";
import {useEffect, useState} from "react";

export const useFetch = (api:any,  endpoint?: string, query?: any) => {
  const [data, setData] = useState<GetPostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (arg?:any) => {
    setIsLoading(true);
    try {
      const res = await api(arg);
      setData(res.data);
      setIsLoading(false)
    } catch (e: any) {
      setError(e);
      // alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const reFetch = (arg?:any) => {
    setIsLoading(true);
    fetchData(arg);
  }

  return {data, isLoading, error, reFetch};
};
