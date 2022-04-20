import WelcomeMesagge from "./WelcomeMesagge";
import BarMenu from "./BarMenu";
import CenteredSlider from "./CenteredSlider";
import FormComponent from "./FormComponent";
import FullText from "./Fulltext";
import SliderAcordion from "./SliderAcordion";
import SliderX3 from "./SliderX3";


function Container(){
    return (
    <div className="MainContainer">
        {/* <img className="backgroundimg" src={process.env.PUBLIC_URL +'./cabania.jpg'} alt="imagen de fondo"></img> */}
        <BarMenu/>
           <WelcomeMesagge/>
           <FullText/>
           <SliderX3/>
           <SliderAcordion/>
           <CenteredSlider/>
           <FormComponent/>
          
       </div> 
        


    )
}

export default Container;