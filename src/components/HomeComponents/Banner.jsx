
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
                    className="parallax-bg rounded-xl lg:w-full"
                    style={{
                        'background-image':
                            'url(https://i.ibb.co/rsx28vB/child-reading.png)',
                    }}
                    data-swiper-parallax="-23%"
                >

                </div>
                <SwiperSlide className=' '>
                    <div className='lg:h-[32rem] rounded-xl  '>
                        <div className="title" data-swiper-parallax="-300">
                        The Benefits of Group Study
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                        Enhancing Learning Through Collaboration
                        </div>
                        <div className="text text-balance" data-swiper-parallax="-100">
                            <p>
                            Group study enriches learning experiences by pooling diverse perspectives, fostering motivation, encouraging collaboration. It also promotes the development of crucial social and time management skills. Ultimately, it provides a supportive environment for students to learn from one another, enhance their academic abilities, and build lasting connections.                            </p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                    The Benefits of Collaborative Learning
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                    Enhancing Academic Performance Together
                    </div>
                    <div className="text " data-swiper-parallax="-100">
                        <p>
                        Collaborative learning, through group study, enriches academic experiences by pooling diverse perspectives, fostering motivation, and encouraging collaboration. It also cultivates essential social and time management skills. Ultimately, it offers a supportive environment where students can learn from one another, improve their academic abilities, and forge lasting connections.
                        </p>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                    The Power of group Learning
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                    Strengthening Academic Achievement through Collaboration
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                        Group study offers a myriad of benefits, enriching academic experiences by bringing together diverse perspectives, fostering motivation, and promoting collaboration. Moreover, it cultivates vital social and time management skills. In essence, it creates a supportive environment where students can learn from each other, enhance their academic prowess, and establish enduring bonds.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                    Enhancing Learning Through Collaboration
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                    The Advantages of Group Study
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                        Group study facilitates a deeper understanding and improved academic performance by leveraging diverse perspectives, fostering motivation, and encouraging collaboration. It also nurtures essential social and time management skills, creating a supportive environment where students learn from one another, enhance their academic abilities, and forge lasting connections.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                    Maximizing group Learning Potential
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                    Unleashing Academic Excellence Through Collaboration
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                        Group study offers a multifaceted approach to learning, enriching educational experiences by harnessing diverse perspectives, fostering intrinsic motivation, and promoting collaborative problem-solving. Beyond academics, it cultivates vital social and time management skills, creating a supportive ecosystem where students synergize their strengths, bolster their understanding, and forge enduring bonds                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}



export default Banner;