import WelcomeMesagge from "./WelcomeMesagge";
import BarMenu from "./BarMenu";
import CenteredSlider from "./CenteredSlider";
import FormComponent from "./FormComponent";
import FullText from "./Fulltext";
import SliderAcordion from "./SliderAcordion";
import SliderX3 from "./SliderX3";
import { Grid } from '@material-ui/core';

function Container() {
    return (
        <div className="MainContainer">
            {/* <img className="backgroundimg" src={process.env.PUBLIC_URL +'./cabania.jpg'} alt="imagen de fondo"></img> */}
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                        <BarMenu />
                    </Grid>
                    </Grid>
            </div>
            <div className="welcome">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                        <WelcomeMesagge />
                    </Grid>
                </Grid>
            </div>
            <SliderX3 />

            <FullText />
            <CenteredSlider />
            <SliderAcordion />
            <FormComponent />
        
        </div >



    )
}

export default Container;