import {Link} from 'react-router-dom'
import './NavBar.scss'

export const NavBar = (props) => {

    return (
    <header className="flex space-between" >
        <div className="logo"> useUs</div>
        <ul className="flex clean-list ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/123">Profile</Link>
          </li>
        </ul>
    </header>
    )

}

