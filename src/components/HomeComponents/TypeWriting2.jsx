import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useTypewriter } from "react-simple-typewriter";

const TypeWriting2 = () => {
    const { user } = useContext(authContext)
    const [text] = useTypewriter({
        words: [`Welcome ${user?.displayName ? user?.displayName : ''}`, 'You can update your profile','and delete your own assignments'],
        loop: 0
    })
    return (
        <div className='App'>
            <p className='text-3xl text-base-content lg:text-5xl font-extrabold pt-5 text-center'>
                <span className='text-[#D2B48C]'>{text}</span>
            </p>

        </div>
    );
};

export default TypeWriting2;