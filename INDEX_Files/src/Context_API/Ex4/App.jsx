import {useContext} from 'react';
import {ThemeContext} from './Context/ThemeContext';
import Journal from './Components/Journal';
import Notification from './Components/Notification';
import QuoteBox from './Components/QuoteBox'


const App = () => {

  const {darkMode,toggleTheme} = useContext(ThemeContext);

  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-950 transition-all duration-500'>
      <button 
        onClick={toggleTheme}
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl'
      >
        Toggle {darkMode ? "Light":"Dark"} mode.
      </button>
      <Notification />
      <QuoteBox />
      <Journal />
      {darkMode && (
      <p className="animate-pulse text-blue-300">
        🌙 Reflect deeply — even darkness has meaning.
      </p>
)}

      <footer className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
         Copyright @2025...!!!
      </footer>
    </div>
  )
}

export default App
