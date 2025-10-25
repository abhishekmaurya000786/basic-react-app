import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'


const Dashboard = () => {

    const {user,updateUser} = useContext(UserContext);
    
    return (
        <div>
            <p className='text-lg'>Role : <span className='font-semibold'>{user.role}</span></p>
            <button 
                onClick={() => updateUser({role: "React Developer"})} 
                className='px-4 py-2 bg-red-600-500 text-white rounded-lg hover:bg-green-600'
            >
            Promote to React Dev</button>
        </div>
    );
}

export default Dashboard
