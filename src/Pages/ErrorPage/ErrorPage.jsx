import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <img className="" src="https://i.ibb.co/b5yPJws/error.webp" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to="/" rel="noopener noreferrer" href="#" className="btn px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
            </div>

        </div>
    );
};

export default ErrorPage;