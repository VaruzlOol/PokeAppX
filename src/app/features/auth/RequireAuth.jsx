import { useLocation, Navigate, Outlet } from 'react-router-dom'
//import hooks for get state auth

const RequireAuth = () => {
    const { authenticated } = true;
    const location = useLocation();
    
    return ( authenticated ?  <Outlet /> : <Navigate to = '/login' state = {{ from: location }} replace /> );
}

export default RequireAuth;