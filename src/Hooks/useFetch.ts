import {useState,useEffect} from 'react'

interface Result {
  
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Array<Object>,
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Array<Object>,
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null | unknown;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Array<Object>,
  genres: Array<Object>,
  stores: Array<Object>,
  tags: Array<Object>,
  esrb_rating: Array<Object>,
  short_screenshots: Array<Object>,
  clip: null | unknown;
  
}

interface Data{
  count: number,
  next: string | null,
  previous: null | string,
  results: Array<Result>,
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Object,
  nofollow_collections: Array<any>;
}

function useFetch(props:{url:string}) {
  const [data,setData] = useState<Data | null>(null)
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