import HomeTitle from "../components/HomeTitle"
import Banner from "../components/Banner"
import Button from "../components/Button"

const Home = () => {
    document.body.style.backgroundImage = "radial-gradient(circle, #22C4C7, #178D8F)"
    return (
        <div className="container center">
            <div className="row row-cols-1">
                <HomeTitle />
                <Banner />
                <div className="col d-flex justify-content-center my-4">
                    <Button name="JOIN NOW" link="/MyPersonalData" type="button" />
                </div>
            </div>
        </div>
    )
}

export default Home