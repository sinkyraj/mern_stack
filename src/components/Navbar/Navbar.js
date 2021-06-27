import { useState } from 'react'

import { 
  Collapse, 
  Navbar as NavigationBar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

const toggleNavbar = () => setCollapsed(!collapsed); //!collapsed //opposite of whatever the condition is open or close
return(
<>
{/* <h1>This is NavBar</h1> */}
    <NavigationBar color="faded" light>
      <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink>
              <Link to="/mern_stack/" className="navlink">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to='/mern_stack/Profile' className="navlink">Profile</Link>
               
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavigationBar>
</>

)


}

export default Navbar