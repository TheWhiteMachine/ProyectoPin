import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Nav } from 'react-bootstrap';
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}));
function BarMenu() {
    const classes = useStyles();
    return (
        <div >
            <Grid container>
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}className="navbar_menu">
                    <Navbar sticky="top" bg="light" variant="dark" expand="lg"  >
                       
                            <Navbar.Brand href="#" className="nav-link" >CABAÑASPP</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="me-auto navbar-nav">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#cabanias">Cabañas</Nav.Link>
                                    <Nav.Link href="#planes">Planes</Nav.Link>
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#contact">Contacto</Nav.Link>
                                   
                                </Nav>
                            </Navbar.Collapse>

                    </Navbar>
                </Grid>
            </Grid>
        </div>
    )
}
export default BarMenu;