function WelcomeMesagge(){
    return(
        <div className="WelcomeText" >
           
            <div className="card bg-dark text-white" >
                <img className="card-img bkgImg" src={process.env.PUBLIC_URL +'./images/forest.jfif'} alt="imagen de fondo"></img>
                <div className="card-img-overlay">
                    <h2>Un fin de semana en una cabaña es lo único que se necesita para querer otro</h2>
                    <span>Sensaciones, momentos, recuerdos inolvidables.</span>
                    <span>¡Empezamos?</span>
                    <br></br>
                    <button type="button" className="btn btn-primary">Leer Mas</button>
                </div>
                <div className="col-4"></div>
            </div>
          
        </div>

)}
export default WelcomeMesagge;