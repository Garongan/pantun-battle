import { useNavigate } from "react-router-dom"

function Button (props) {
    var modal
        if (props.name === "SHARE") {
            modal = "modal"
        }
    const navigate = useNavigate()
    return (
        <button className="btn" data-bs-dismis={modal} type={props.type} onClick={() => navigate(props.link)}>
            {props.name}
        </button>
    )
}

export default Button