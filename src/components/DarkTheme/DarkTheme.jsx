import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";


const DarkTheme = () => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        if (mode == 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [mode])
    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');

    }

    return (
        <>
            <button className="btn hover:text-white hover:bg-[#D2B48C]" onClick={handleMode}>
                {mode === "light" ? <IoMdMoon /> : <LuSunMoon />}
            </button>
        </>
    );
};

export default DarkTheme;