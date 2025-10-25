import { ThemeProvider } from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';
import Navbar from './Components/Navbar';
import "./index.css"

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <Navbar />
        </UserProvider>
      </ThemeProvider>
    </div>
  )
}

export default App