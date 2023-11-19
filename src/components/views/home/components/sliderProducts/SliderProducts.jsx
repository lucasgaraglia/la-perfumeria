
import './sliderProducts.css'

export const SliderProducts = () => {
    return (
        <>
        <h1 className='h1-prod'>Productos destacados</h1>
        <div className='container-carousel-products'>
            <div id="carouselExample" className="carousel slide carousel-products">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222707/1004101-.jpg?v=638343760063570000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222706/1004098-.jpg?v=638343760052270000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222705/1004096-.jpg?v=638343760042100000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper">

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222709/1004102-.jpg?v=638343760084970000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222704/1004097-.jpg?v=638343760031900000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/222708/1004100-.jpg?v=638343760075030000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper">

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/219140/1003123.jpg?v=638265248018500000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/202364/blue-jeans-edt-2C1DFFC1A16BDA13968182A72B0C0B00.jpg?v=638085745689770000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img src="https://juleriaque.vtexassets.com/arquivos/ids/202225/romantic-blosson-edp-CCEE2DBAC4B1279C5870E053AEF4A522.jpg?v=638085744657230000" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Perfume</h5>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    )
}
