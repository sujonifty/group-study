import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext} from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// import DatePicker from "react-datepicker"; 
const CardDetails = () => {
    const cardInfo = useLoaderData();
    const { user } = useContext(authContext);
    const { _id, title, userName, userEmail, photo, mark, time, level, description } = cardInfo;
    // const [toast,setToast]=useState();
    // const [startDate, setStartDate] = useState(time);
    const handleSubmit = (e) => {
        e.preventDefault();
        const authorName = e.target.authorName.value;
        const authorEmail = e.target.authorEmail.value;
        const examineeDescription = e.target.examineeDescription.value;
        const pdf = e.target.pdf.value;
        const examineeName = user?.displayName
        const examineeEmail = user?.email
        const examineePhoto = user?.photoURL
        const status = "pending"
        const info = { title, userName, userEmail, photo, mark, time, level, description, examineeDescription, pdf, status, authorEmail, authorName, examineeName, examineeEmail, examineePhoto }

        console.log(pdf);
        fetch('https://online-group-study-assignment-server-theta.vercel.app/submittedAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        title: 'Success!',
                        text: 'Assignment Submission successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })

                }

            })
    }
    // console.log(cardInfo)
    return (






        <section className="bg-base-100 border-2 ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-base-content capitalize lg:text-3xl ">Assignment Tasks</h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img className=" object-fill w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={photo} alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="text-sm text-blue-500 uppercase">{title}</p>

                        <a href="#" className="block mt-4 text-2xl font-semibold text-base-content hover:underline ">
                            {title}
                        </a>

                        <p className="mt-3 text-sm text-base-content  md:text-sm">
                            {description}
                        </p>

                        <div className="flex items-center text-base-content justify-between">
                            <div>
                                <p className=" mt-2 ">Level: {level}</p>
                                <p className=" mt-2 ">Assignment marks: {mark}</p>
                                <p className=" mt-2 ">Dead line: {time}</p>
                            </div>

                            <div>
                                {
                                    cardInfo.editorEmail ?
                                        <>
                                            <div className="flex  items-center mt-6">
                                                <img className="object-cover object-center w-10 h-10 rounded-full" src={user?.photoURL} alt="" />

                                                <div className="mx-4">
                                                    <h1 className="text-sm text-base-content dark:text-gray-200">Author: {userName}</h1>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center mt-6">
                                                <img className="object-cover object-center w-10 h-10 rounded-full" src={cardInfo?.editorPhoto} alt="" />

                                                <div className="mx-4">
                                                    <h1 className="text-sm text-base-content dark:text-gray-200">Editor: {cardInfo?.editorName}</h1>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{cardInfo.editorEmail}</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="flex items-center mt-6">
                                                <img className="object-cover object-center w-10 h-10 rounded-full" src={user?.photoURL} alt="" />

                                                <div className="mx-4">
                                                    <h1 className="text-sm text-base-content dark:text-gray-200">Author: {userName}</h1>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</p>
                                                </div>
                                            </div>

                                        </>
                                }
                            </div>
                        </div>
                        <div className=" flex items-center mx-auto">

                            {/*  submit assignment section */}

                            <div className="flex items-center gap-x-6">

                                {/* The button to open modal */}
                                <label htmlFor="my_modal_7" className="btn my-5">Take Assignment</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold">Give feedback for this assignment</h3>
                                        <div className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                            <h2 className="text-lg font-semibold text-base-content capitalize dark:text-white">Submit Your Assignment</h2>

                                            <form onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="username">Title</label>
                                                        <input id="title" name="title" readOnly defaultValue={title} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Description</label>
                                                        <input id="description" name="description" readOnly defaultValue={description} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="password">Thumbnail Image</label>
                                                        <input id="photo" name="photo" readOnly defaultValue={photo} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="passwordConfirmation">Marks</label>
                                                        <input id="mark" name="mark" readOnly defaultValue={mark} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="passwordConfirmation">Assignment Type</label>
                                                        <select name="level" className="select select-bordered w-full ">
                                                            <option readOnly defaultValue={level} selected>{level}</option>
                                                            <option>Easy</option>
                                                            <option>Medium</option>
                                                            <option>Hard</option>
                                                        </select>

                                                    </div>

                                                    {/* <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="passwordConfirmation">Due Time</label>
                                                        <DatePicker  name="time" readOnly defaultValue={time} type="date" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div> */}
                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="passwordConfirmation">Due Time</label>
                                                        <input  name="time" readOnly defaultValue={time} type="date" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Author name</label>
                                                        <input  name="authorName" defaultValue={userName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="username">Author Email</label>
                                                        <input  name="authorEmail" defaultValue={userEmail} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>
                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="username">PDF Link</label>
                                                        <input required name="pdf" type="text" placeholder="Send PDF link" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                    <div>
                                                        <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Examinee Description</label>
                                                        <input required name="examineeDescription" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    </div>

                                                </div>

                                                <div className="flex justify-center mt-6">
                                                    <input type="submit" value="Submit Assignment" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};
CardDetails.propTypes = {
    cardInfo: PropTypes.object
}
export default CardDetails;