import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const ShareIG = () => {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#FDFEFF"
    
    return (
        <div className="container container-sharePic">
            <center><img src="img/fake-isi.png" alt="" className="sharePic" /></center>
            <div className="row">
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Icon icon="skill-icons:instagram" width="50" />
                        Direct
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Icon icon="skill-icons:instagram" width="50" />
                        Feed
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Icon icon="skill-icons:instagram" width="50" />
                        Reels
                    </Link>
                </div>
                <div className="col">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Icon icon="skill-icons:instagram" width="50" />
                        Stories
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShareIG