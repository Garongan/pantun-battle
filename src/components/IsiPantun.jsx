function IsiPantun () {

    function hideSubmitBtn() {  
        document.getElementById("submit-share-button").style.display = "none";
    }

    return (
        <div className="container container-buat-pantun">
            <form className="isi-pantun">
                <textarea name="isi-pantun" rows="4" spellCheck="false" autoFocus placeholder="Tulis pantun-mu disini"></textarea>
                {/* button trigger pup up */}
                <div className="d-flex justify-content-center">
                    <div className="btn" id="submit-share-button" onClick={hideSubmitBtn} data-bs-toggle="modal" data-bs-target="#tqModal">
                        SUBMIT
                    </div>
                </div>
            </form>
        </div>        
    )
}

export default IsiPantun