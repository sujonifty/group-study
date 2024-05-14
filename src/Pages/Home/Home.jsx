import { useLoaderData } from "react-router-dom";
import Banner from "../../components/HomeComponents/Banner";
import Faq from "../../components/HomeComponents/Faq";
import FeatureCard from "../../components/HomeComponents/FeatureCard";
import TypeWriting from "../../components/HomeComponents/TypeWriting";


const Home = () => {
    const allFeatures = useLoaderData();
    const features = allFeatures.slice(0, 12)
    return (
        <div className="bg-base-100">
            <div className="mx-auto h-5 mb-10">
                <TypeWriting></TypeWriting>
            </div>
            <Banner></Banner>
            
            <div className="space-y-5 text-center my-5 md:my-10">
                <h1 className="text-3xl md:text-5xl text-center text-base-content">Exploring Our Group Study Features</h1>
                <p className="bg-base-100  text-base-content text-xl text-justify p-4 md:text-balance w-full mx-auto md:w-11/12">
                    Welcome to our Group Study Feature Section! Here, we showcase the key features and benefits of our group study platform designed to enhance your collaborative learning experience. From interactive study sessions to seamless communication tools, our platform offers everything you need to succeed in group study endeavors. Discover how our features can help you connect with peers, share knowledge, and achieve academic excellence together. Explore the innovative functionalities that make group studying efficient, engaging, and effective.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 md:20">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>

            <Faq></Faq>
            
        </div>
    );
};

export default Home;