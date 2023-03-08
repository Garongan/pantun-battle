import { Link } from 'react-router-dom'

const ShareIG = () => {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#FDFEFF"
    
    return (
        <div className="container container-sharePic">
            <center><img src="img/fake-isi.png" alt="" className="sharePic" /></center>
            <div className="row">
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Direct
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Feed
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Reels
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <iconify-icon icon="skill-icons:instagram" width="50"></iconify-icon>
                        Stories
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShareIG