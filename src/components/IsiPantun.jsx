function IsiPantun () {

    function hideSubmitBtn() {  
        document.getElementById("submit-share-button").style.display = "none";
    }

    return (
        <div className="container container-buat-pantun">
            <form>
                <div className="isi-pantun">
                    <textarea name="isi-pantun" rows={4} spellCheck="false" autoFocus placeholder="Tulis pantun-mu disini" />
                </div>
                {/* button trigger pup up */}
                <div className="btn" id="submit-share-button" onClick={hideSubmitBtn} data-bs-toggle="modal" data-bs-target="#tqModal">
                    SUBMIT
                </div>
            </form>
        </div>        
    )
}

export default IsiPantun