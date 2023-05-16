import {Suspense} from 'react'
import { fetchData } from '../Hooks/renderAsFetch'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y,EffectCreative } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

function Trailers(props:{trailers:any}) {
    
    const data = props.trailers.read()
  return (
    <>
        {console.log(data)}
        <h3>Trailers:</h3>
            
            <Swiper spaceBetween={10}
    modules={[Navigation, Pagination, A11y,EffectCreative]}
    navigation
      pagination={{ clickable: true }}
      
    slidesPerView={1}>
                {data?.results.map((res:any)=>(
                
                    <SwiperSlide>
                        <video src={res.data?.max} title={res.name} style={{width:"100%"}} poster={res.preview} controls></video>
                    </SwiperSlide>
                ))}

            </Swiper>
        
    </>
    
  )
}

export default Trailers