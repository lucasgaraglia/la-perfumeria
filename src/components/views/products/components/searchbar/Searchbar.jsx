
import './searchbar.css'

export const Searchbar = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">

            <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar productos" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>

        </div>
    )
}
