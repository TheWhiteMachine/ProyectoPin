function FormComponent(){
    return (
        <form className="MailForm">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="text" className="form-label">Escriba aqui</label>
          <input type="textarea" className="form-control" id="text"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
export default FormComponent;