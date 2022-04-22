import Carousel from 'react-bootstrap/Carousel'
function SliderX3() {
  return (
    <section className="slider-3" id="cabanias">
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
      <div className="text-content-area">
      <div className="d-flex">
      <div className="izquierda">

      </div>
          <div className="text-paragraph">
          <h2>Irse un poco</h2>
          <h3>para volver mejor</h3>
          <p>Ea voluptate proident deserunt labore consequat aliqua. Mollit id adipisicing incididunt quis ad proident fugiat tempor qui dolor velit proident culpa incididunt. Aliquip fugiat officia esse sunt minim.
          Veniam laboris mollit ad excepteur eiusmod nisi exercitation aliqua. Deserunt id id aliqua elit aute fugiat. Labore mollit culpa excepteur officia sunt. Lorem aliqua in nisi non sunt laborum quis consectetur labore. Occaecat dolore dolore consectetur qui Lorem deserunt exercitation consectetur ipsum id aliquip incididunt dolor. Et magna incididunt consequat laborum ullamco ea. </p>
          </div>
      </div>

      </div>

    </section>
  )
}
export default SliderX3;
