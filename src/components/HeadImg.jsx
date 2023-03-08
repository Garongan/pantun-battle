function HeadImg () {
    return (
        <div className="col">
            {/* <!-- head img --> */}
            <img src={process.env.PUBLIC_URL + '/img/HeadImgPersonalData.jpg'} className="head-img" alt="" />
        </div>
    )
}

export default HeadImg