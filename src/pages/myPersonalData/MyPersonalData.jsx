import HeadImg from '../../components/myPersonalData/HeadImg'
import FormPersonalData from '../../components/myPersonalData/FormPersonalData'

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