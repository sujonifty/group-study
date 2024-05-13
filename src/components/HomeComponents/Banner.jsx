
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
//  import './banner.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        // <>
        //     <Swiper
        //         spaceBetween={30}
        //         centeredSlides={true}
        //         autoplay={{
        //             delay: 2500,
        //             disableOnInteraction: false,
        //         }}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         navigation={true}
        //         modules={[Autoplay, Pagination, Navigation]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        //             <img src="https://i.ibb.co/ng5X6qC/Group-Study1.webp" alt="" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div>
        //             <img className='w-full ' src="https://i.ibb.co/0Z0w8W7/Study-Groups2.png" alt="" />

        //             </div>
        //         </SwiperSlide>

        //     </Swiper>
        // </>
        < div className='my-20'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper rounded-xl"
            >
                <div
                    slot="container-start"
                    className="parallax-bg rounded-xl"
                    style={{
                        'background-image':
                            'url(https://i.ibb.co/0Z0w8W7/Study-Groups2.png)',
                    }}
                    data-swiper-parallax="-23%"
                >

                </div>
                <SwiperSlide className=' '>
                    <div className='lg:h-96 flex bg-black opacity-60 rounded-xl flex-col justify-center items-center'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text " data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}



export default Banner;