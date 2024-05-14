import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureCard = ({feature}) => {
    const { _id, userEmail, userName, title, photo, mark, time, level, description } = feature;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={ photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Category: {level}</span>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="dark:text-gray-800">{description}</p>
            <div className="text-center mt-5">
                <Link to={`/cardDetails/${_id}`}>
                    <button className="btn btn-wide  bg-base-400 text-base-content">View Details</button>
                </Link>
            </div>
        </div>
    );
};
FeatureCard.propTypes = {
    feature: PropTypes.object
}
export default FeatureCard;