import './NavBarStyling.css';

export default function Navbar() {
    return (
        <div className="nav-container">
            <h1 className='logo'>GLOBEHACKERS</h1>
            <ul className='menu'>
                <li className='menu-items'>HOME-PAGE</li>
                <li className='menu-items'>CREATE BLOG</li>
            </ul>
        </div>
    )
}