import {Link} from 'react-router-dom'
import * as userService from '../utilities/users-service'

//can also destructure from props by 
//({name}) then below it will be
//name
export default function NavBar ({user, setUser}) {
    function handleLogout () {
        //Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
return(
    <nav>
        <Link to = "/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to = "/orders/new">New Order</Link>
        <p>Welcome, {user.name} . This is your email {user.email}</p>
        &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
)
}