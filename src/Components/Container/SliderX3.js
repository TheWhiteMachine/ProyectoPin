function SliderX3(){
    return (
    <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={process.env.PUBLIC_URL +'./slider1.jpg'} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={process.env.PUBLIC_URL +'./slider2.jpg'} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" ssrc={process.env.PUBLIC_URL +'./slider3.jpg'} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>
    </section>
    )
}
export default SliderX3;