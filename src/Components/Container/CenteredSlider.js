function CenteredSlider(){
    return (
        <section className="centered-slider part-container" id="cabanias">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./c1.jpg" alt="First slide"/>
                </div>
                 <div class="carousel-item">
                    <img class="d-block w-100" src={process.env.PUBLIC_URL + './c2.jpg'} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={process.env.PUBLIC_URL + './c3.jpg'} alt="Third slide"/>
                </div>
             </div>
        </div>
        </section>
    )
}
export default CenteredSlider;