import './form.css'

export const Form = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <form className="form-contact" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@mail.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                </div>
                <button type='submit' className='btn btn-success'>Enviar</button>
            </form>
        </div>
    )
}
