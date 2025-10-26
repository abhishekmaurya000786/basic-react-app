import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import {ThemeContext} from '../Context/ThemeContext'



const Dashboard = () => {

    const {user,updateUser} = useContext(UserContext);
    
    
    return (
        <div>
            <p className='text-lg m-3'>Role : <span className='font-semibold '>{user.role}</span></p>
            <button onClick={() => updateUser({role: "React Developer"})} className='px-4 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600'>
            Promote to React Dev</button>
        </div> 
    );
}

export default Dashboard
