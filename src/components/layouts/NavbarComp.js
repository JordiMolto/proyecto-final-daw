import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link ,useNavigate} from 'react-router-dom'
import Logo from '../../imgs/logo_transparent.png'

//USUARIO LOGIN / LOGOUT
import { LoginButton } from '../views/Login';
import { LogoutButton } from '../views/Logout';
import { Profile } from '../Profile';
import { useAuth0 } from '@auth0/auth0-react'


function NavbarComp() {
        const { isAuthenticated } = useAuth0();
       
       /* const navigate = useNavigate();
        
        function handleClick() {
      navigate('/home');
  }*/




        //utilizamos este parámetro para hacer comprobaciones en el login
        return (
            //esto <> es lo mismo que poner un Fragment
            <>
                <div>
                    <Navbar className='navBg ' variant='dark' expand="lg">
                        <Container >
                            <Navbar.Brand as={Link} to={'/'}><img alt='Logo aplicación' src={Logo} height={"60vmin"} /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="prueba navbar-collapse justify-content-end me-auto my-2 my-lg-0">
                                    <Nav.Link className='navText' as={Link} to={'/'}>Home</Nav.Link>
                                    {/*<Link to="/politicasPrivacidad">AboutLINK</Link>*/}
                                    <a className='navText' href='/#id_about' >About</a>
                                    <a className='navText' href='/#id_skills'>Conocimientos</a>
                                    <a className='navText' href='/#id_templates'>Templates</a>
                                    <a className='navText' href='/#id_plans'>Precios</a>
                                    <Nav.Link className='navText' as={Link} to={'/wallpapers'}>Wallpapers</Nav.Link>
                                    <Nav.Link className='navText' as={Link} to={'/contact'}>Contacto</Nav.Link>
                                </Nav>

                                {/* SI ESTÁ AUTENTICADO nos tiene que mostrar el Perfil y el Logout Button, y sino, el Login Button */}
                                {isAuthenticated ? <>
                                    <Profile></Profile>
                                    <LogoutButton></LogoutButton>
                                </>
                                    : <LoginButton></LoginButton>}

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Outlet></Outlet>
            </ >
        )
    }

export default NavbarComp;