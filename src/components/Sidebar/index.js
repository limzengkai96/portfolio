import './index.scss'
// import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/kai_logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { HiX} from 'react-icons/hi';
import {FaBars} from 'react-icons/fa'

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow(!show);
    };

    return(
        <div className='nav-bar'>

                <img src={LogoS} alt="logo" />

            <div className="nav-items">
                <h1>Home</h1>
                <h1>Education</h1>
                <h1>Experience</h1>
                <h1>Qualification</h1>
                <h1>Project</h1>
            </div>
            <div className="dropdown-btn" onClick={toggleDropdown}>
                {show ? <HiX size={30}/> : <FaBars size={30}/>}
            </div>
            {show && (
                <ul className="dropdown-menu">

                    <DropdownItem text="Home" />
                    <DropdownItem text="Education" />
                    <DropdownItem text="Experience" />        
                    <DropdownItem text="Qualification" />
                    <DropdownItem text="Project" />
                </ul>
            )}
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <p>{props.text}</p>
        </li>
    );
}

export default Sidebar;
