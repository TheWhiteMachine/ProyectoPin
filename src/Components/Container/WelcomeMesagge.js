function WelcomeMesagge(){
    return(
        <div className="row WelcomeText col-8" >
            <div className="card bg-dark text-white" >
                <img ClassName="card-img" className="bkgImg" src={process.env.PUBLIC_URL +'./cabania.jpg'} alt="imagen de fondo"></img>
                <div ClassName="card-img-overlay">
                    <h2>Un fin de semana en una cabaña es lo único que se necesita para querer otro</h2>
                    <spam>Sensaciones, momentos, recuerdos inolvidables.</spam>
                    <spam>¡Empezamos?</spam>
                    <br></br>
                    <button type="button" ClassNameName="btn btn-primary">Leer Mas</button>
                </div>
                <div className="col-4"></div>
            </div>
        </div>

)}
export default WelcomeMesagge;