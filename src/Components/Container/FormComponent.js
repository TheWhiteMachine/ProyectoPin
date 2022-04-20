import { useState } from "react";
import {axios} from "axios";

function FormComponent() {
  const [userData, setUserData] = useState({
    email: "",
    user: "",
    phone: "",
    comment: ""
  }) 

  const handleChange = function(event){
    const property = event.target.name
    const value = event.target.value
    setUserData ({...userData, [property]:value })
  }
  const handleSubmit = function(event){
    event.preventdefault()
    axios(
      {
        url: "http://127.0.0.1:8000/contacts",
        method: "POST",
        data: userData
      }.then(result=> console.log(result.data))
    )}

  const disable =!(email.length || user.length || phone.length || comment.length)

  
    return (
      <section class="d-flex">
        <div id="form-row" class="row">
          <div class="col-1">
          </div>
        <div class="col-lg-5 col-sm-12">
        <form onSubmit={handleSubmit} class="MailForm" id="mailform">
          <div className="formulario">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >Dirección de Email</label>
            <input type="email" onChange={handleChange} name="email" className="form-control" id="exampleInputEmail1" required="true" placeholder="usuarioe@sumail.com" />
          </div>
            <div className="mb-3">
            <label for="Name">Nombre</label>
            <input type="text" onChange={handleChange} name="user" class="form-control" id="Name" required="true" placeholder="Nombre"/>
          </div>
          <div className="mb-3">
            <label for="Name">Teléfono</label>
            <input type="text" onChange={handleChange}  name="phone" class="form-control" id="phone" required="true" placeholder="Teléfono"/>
          </div>
        
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Escriba aqui su mensaje</label>
          <textarea onChange={handleChange} className="form-control" rows="4" id="text"/>
          </div>
        <button disabled={disable} type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
        </div>
              <div class="col-lg-5 col-sm-12">
                <img src="./viaje.jpg" alt="fotoviaje"/>
              <div class="col-1">
             </div>
        </div>
        </div>


      </section>

    )
}
export default FormComponent;
