function Banner () {
    return (
            <div class="col mt-4">
                <img src={process.env.PUBLIC_URL + '/img/LOGO PANTUN BATTLE.png'} className="d-block w-100 mx-auto rounded" alt="banner" />
            </div>
    )
}

export default Banner