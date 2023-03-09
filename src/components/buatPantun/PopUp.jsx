import Button from "../Button"
import CloseButton from 'react-bootstrap/CloseButton'
import { useNavigate } from "react-router"

function PopUp () {
    const navigate = useNavigate()
    
    return (
        <div className="modal fade" id="tqModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="tqModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <CloseButton data-bs-dismiss="modal" onClick={() => navigate('/')} />
                    </div>
                    <div className="modal-body">
                        <div className="ucapan-thanks">
                            <p className="text-break ">
                                Terimakasih <span>KEVIN SANJAYA</span> telah berbagi pantun bersama <span>LISTERINE</span>.  Yuk SHARE pantun kamu di INSTAGRAM STORY dan TAG 3 TEMANMU supaya kesempatan menangmu makin besar.
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button name="SHARE" link="/ShareIG" type="button" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp