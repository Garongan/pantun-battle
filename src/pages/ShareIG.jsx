const ShareIG = () => {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#FDFEFF"
    return (
        <div className="container container-sharePic">
            <center><img src="img/fake-isi.png" alt="" className="sharePic" /></center>
            <div className="row">
                <div className="col">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Direct
                    </a>
                </div>
                <div className="col">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Feed
                    </a>
                </div>
                <div className="col">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Reels
                    </a>
                </div>
                <div className="col">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Stories
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShareIG