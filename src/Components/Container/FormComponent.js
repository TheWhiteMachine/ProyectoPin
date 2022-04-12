function FormComponent(){
    return (
        <form className="MailForm">
          <div className="formulario">

         
        <div className="mb-3">
          
          <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
       
       
       
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Escriba aqui su mensaje</label>
          <input type="textarea" className="form-control" id="text"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    )
}
export default FormComponent;