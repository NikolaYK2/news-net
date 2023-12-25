import {GetPostsType, postApi} from "@/features/post/api/postApi";
import {useEffect, useState} from "react";

export const useFetch = (api:(data?:any)=>any, endpoint?: string, query?: any) => {
  const [data, setData] = useState<GetPostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (args?:any) => {
    setIsLoading(true);
    try {
      const res = await api(args);
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

  const reFetch = (args?:any) => {
    setIsLoading(true);
    fetchData(args);
  }

  return {data, isLoading, error, reFetch};
};
