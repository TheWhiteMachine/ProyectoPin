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

            <Grid container spacing={3}>
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>

                    <BarMenu />

                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>

                    <WelcomeMesagge />


                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>

                    <SliderX3 />

                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2} lg={2} md={2} sm={2} xl={2}>

                        

                    </Grid>
                    <Grid item xs={10} lg={10} md={10} sm={10} xl={10}>

                        <FullText />

                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>

                    <CenteredSlider />

                </Grid>
            </Grid>








            <SliderAcordion />
            <FormComponent />

        </div >



    )
}

export default Container;
