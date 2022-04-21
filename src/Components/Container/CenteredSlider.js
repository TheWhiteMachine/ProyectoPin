function CenteredSlider() {
    return (
        <section className="centered-slider part-container" id="cabanias">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + './c1.jpg'} alt="First slide"/>
                </div>
                 <div className="carousel-item">
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + './c2.jpg'} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + './c3.jpg'} alt="Third slide"/>
                </div>
             </div>
        </div>
        </section>
    )
}
export default CenteredSlider;