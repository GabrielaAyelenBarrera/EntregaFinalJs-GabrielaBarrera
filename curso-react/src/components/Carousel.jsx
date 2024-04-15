const Carousel = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="row my-4">
                <div className="col-md-6 offset-md-3">
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Recorre el carousel del conjunto Kenya</h5>
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/74ecbc5adcf6a5e1d4c1b83c82374cb2.jpg?imageView2/2/w/800/q/70/format/webp" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/875ddb6fb16241214ef060ad0dc76292.jpg?imageView2/2/w/800/q/70/format/webp" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4237be0c7d0c25ae4512b59a7a9760b6.jpg?imageView2/2/w/800/q/70/format/webp" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/53a357386b9ce1183e67056ea2bfa5f2.jpg?imageView2/2/w/800/q/70/format/webp" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4a81cc00bdf95647d00f21c63e1802f5.jpg?imageView2/2/w/800/q/70/format/webp" className="d-block w-100" alt="..." />
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
            </div>
        </div>
        </div>
                    </div>
              
    )
}

export default Carousel;