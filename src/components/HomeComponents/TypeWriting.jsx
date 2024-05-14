import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useTypewriter } from "react-simple-typewriter";


const TypeWriting = () => {
    const { user } = useContext(authContext)
    const [text] = useTypewriter({
        words: [`${user?.displayName? user?.displayName:'' }`, 'To Our Online Group-Study'],
        loop: 0
    })
    return (
        <div className='App'>
            <p className='text-3xl text-base-content lg:text-6xl font-extrabold pt-5 text-center'>
                Welcome <span className='text-[#D2B48C]'>{text}</span>
            </p>

        </div>
    );
};

export default TypeWriting;