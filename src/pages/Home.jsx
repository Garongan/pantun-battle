import HomeTitle from "../components/HomeTitle"
import BannerSlider from "../components/BannerSlider"
import Banner from "../components/Banner"
import Button from "../components/Button"

const Home = () => {
    return (
        <div className="container">
            <div className="row row-cols-1">
                <HomeTitle />
                <BannerSlider />
                <Banner />
                <div className="col d-flex justify-content-center my-4">
                    <Button name="JOIN NOW" link="/MyPersonalData" type="button" />
                </div>
            </div>
        </div>
    )
}

export default Home