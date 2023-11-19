
import './sliderPics.css'

export const SliderPics = () => {
    return (
        <div className='container-carousel'>
            <div id="carouselExample2" className="carousel slide carousel-pics">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://media.gq.com.mx/photos/5f03717b85180fb06783509c/16:9/w_1280,c_limit/Cover.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.glamour.mx/photos/636550ff6134dbf37fbe3dd1/16:9/w_1280,c_limit/perfumes_aesthetic_para_tener_fuera_de_tu_cajon.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://thehappening.com/wp-content/uploads/2023/08/perfumes-lluvia.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
