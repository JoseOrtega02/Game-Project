import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y,EffectCreative } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

function Screenshots(props:{screenshots:any}) {
   
    const data = props.screenshots.read()
  return (<div style={{marginTop: '20px',marginBottom: '20px'}}>
  <h3>Screnshots:</h3>
    <Swiper spaceBetween={10}
    modules={[Navigation, Pagination, A11y,EffectCreative]}
    navigation
      pagination={{ clickable: true }}
      
    slidesPerView={1}>
        {data?.results.map((r:any) => (
          <SwiperSlide>
            <img src={r.image} style={{width:"100%"}}  alt="" key={r.id}/>
            </SwiperSlide>
        ))}
        
        </Swiper>
        </div>
  )
}

export default Screenshots