
import { useState, useEffect } from "react";
import axios from "axios";
//const BackendEndPointURI
const URI = "http://127.0.0.1:8000/contacts/";
function FormComponent() {


  const [name, setNombre] = useState('');
  const [email, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setMessage] = useState('');

  const store = async (e) => {
    e.preventDefault();

    const res = await axios.post(URI, {
      name: name,
      email: email,
      phone: phone,
      text: text
    });
    console.log(res);

  }




  return (
    <section className="d-flex">
      <div id="form-row" className="row">
        <div className="col-1">
        </div>
        <div className="col-lg-5 col-sm-12">
          <form onSubmit={store} className="MailForm" id="mailform">
            <div className="formulario">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" >Dirección de Email</label>
                <input
                  value={email}
                  onChange={(e) => setMail(e.target.value)}
                  type="email"

                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                  placeholder="usuarioe@sumail.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="Name">Nombre</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setNombre(e.target.value)}
                  name="user"
                  className="form-control"
                  id="Name"
                  required
                  placeholder="Nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  className="form-control"
                  id="phone"
                  required
                  placeholder="Teléfono" />
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="form-label">Escriba aqui su mensaje</label>
                <textarea
                  value={text}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  rows="4"
                  id="text" />
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img src="./viaje.jpg" alt="fotoviaje" />
          <div className="col-1">
          </div>
        </div>
      </div>


    </section>

  )
}
export default FormComponent;
