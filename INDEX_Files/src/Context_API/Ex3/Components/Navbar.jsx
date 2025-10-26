import { useContext } from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import {UserContext} from '../Context/UserContext'

const Navbar = () => {
    const {theme,toggleTheme,themeClasses} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    
    return (
        <nav className={`flex w-max items-center justify-between p-4 ${themeClasses}`}>
            <h1 className='text-xl font-bold'>Welcome {user.name}!</h1>
            
            <button 
                onClick={toggleTheme} 
                className='m-4 p-3 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600'
            >
                Switch to {theme === "light" ?  "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </nav>
    );
}

export default Navbar
