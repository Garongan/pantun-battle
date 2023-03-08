import HeadImg from '../components/HeadImg'
import FormPersonalData from '../components/FormPersonalData'

const MyPersonalData = () => {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#FDFEFF"
    return (
        <div className="row row-cols-1">
            <HeadImg />
            <FormPersonalData />
        </div>
    )
}

export default MyPersonalData