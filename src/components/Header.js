import '../style.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
            <div className="header inline-flex text-size ">
                <h3>My App</h3>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
                
            </div>
        
    )
}
  