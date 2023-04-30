import {useState,useEffect} from 'react'

function useFetch(props:{url:string}) {
  const [data,setData] = useState<Object | null>(null)
  const [error,setError] = useState<String | null>(null)
  const [loading,setLoading] = useState<Boolean>(true)

    useEffect(() => {
        fetch(props.url)
  .then(response => response.json())
  .then(data=> setData(data))
  .catch((error) => setError(error))
  .finally(() => setLoading(false))


    },[])

  return {data,error,loading}

}

export default useFetch