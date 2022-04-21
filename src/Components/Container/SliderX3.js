import Carousel from 'react-bootstrap/Carousel'
function SliderX3() {
  return (
    <section className="slider-3 part-container" id="cabanias">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + './slide1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Naturaleza</h3>
            <p>Desconectarse de todo, menos de la ella.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + './slide2.jpg'}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Sol y paz</h3>
            <p>Todo lo que buscas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + './slide3.jpg'}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Momentos únicos</h3>
            <p>Es hoy y es ahora</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
export default SliderX3;