import React from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";
import { handleApiCall } from '../../apis';

const Sidebar = () => {
  const navigate = useNavigate();

    const styles = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        width: '50px'
    };
    const alertStyle = {
        backgroundColor: 'indianred',
        width: '782px',
        marginLeft: '22rem',
        padding: '10px'
    }
 
    const handleButtonClick = async () => {
        const result = await handleApiCall('post','user/logout')
        if(result.data.status == true){
        navigate('/');
        }
      };
    return (
        <>
            <div class="sidebar">
                <NavLink to="/bucket" style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                        <a href="/bucket" className={isActive ? 'active' : ''}>Volume Bucket</a>

                    )}
                </NavLink>
                <NavLink to="/ball" style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                        <a href="/ball" className={isActive ? 'active' : ''}>Volume Ball</a>

                    )}
                </NavLink>
            
                <NavLink to="/suggestion" style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                        <a href="/suggestion" className={isActive ? 'active' : ''}>Suggestion</a>

                    )}
                </NavLink>
                <button onClick={handleButtonClick} className='btn btn-success' style={{borderRadius: '0px'}}> Logout</button>

            </div>


        </>
    )
}

export default Sidebar