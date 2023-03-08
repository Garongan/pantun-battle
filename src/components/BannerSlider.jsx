import Carousel from 'react-bootstrap/Carousel'

function BannerSlider () {
    return (
        <div className="col mt-4">
            <Carousel controls = {false} >
                <Carousel.Item interval={1000}>
                    <img src="img/banner-slider1.jpg" className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="img/banner-slider2.jpg" className="d-block w-100" alt="..." />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerSlider