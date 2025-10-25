import { useContext } from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import {UserContext} from '../Context/UserContext'

const Navbar = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    
    return (
        <nav className='flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800'>
            <h1 className='text-xl font-bold dark:text-white'>Welcome {user.name}!</h1>
            <button 
                onClick={toggleTheme} 
                className='px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600'
            >
                Switch to {theme==="light" ? "dark" : "light"} theme.
            </button>
        </nav>
    );
}

export default Navbar
