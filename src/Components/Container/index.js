import BarMenu from "./BarMenu";
import CenteredSlider from "./CenteredSlider";
import FormComponent from "./FormComponent";
import FullText from "./Fulltext";
import SliderAcordion from "./SliderAcordion";
import SliderX3 from "./SliderX3";

function Container (){
    return (
       <div>
           <BarMenu/>
           <SliderX3/>
           <FullText/>
           <CenteredSlider/>
           <SliderAcordion/>
           <FormComponent/>
       </div>
        


    )
}

export default Container;