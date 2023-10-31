import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/signin" state={location.pathname}></Navigate>;
};

export default PrivateRoute;