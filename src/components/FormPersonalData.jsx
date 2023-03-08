import Button from "./Button"

function FormPersonalData () {
    return (
        <div className="col form-personal-data">
            <div className="row mt-4">
                {/* <!-- title --> */}
                <div className="col-auto">
                    <h1 className="title-personal-data mt-2">
                        <span>My Personal</span> Data
                    </h1>
                </div>
                {/* <!-- icon home --> */}
                <div className="col d-flex justify-content-end">
                    <a href="/" ><iconify-icon icon="mdi:home-circle" width="50" style={{ color: '#56777E' }} ></iconify-icon></a>
                </div>
            </div>
            {/* isi form */}
            <div className="row row-cols-1">
                    <div className="col">
                        <form onSubmit={""} className="form-personal-data-input">
                            <div className="mb-3 mt-1">
                                <label htmlFor="nama">
                                    Nama
                                    <input type="text" className="form-control" name="form-nama" id="form-nama" placeholder="Name..." />
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    Nama
                                    <input type="text" className="form-control" name="form-nama" id="form-nama" placeholder="Email..." />
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nama">
                                    Username Instagram
                                    <input type="text" className="form-control" name="form-nama" id="form-nama" placeholder="Username Instagram..." />
                                </label>
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <Button name="NEXT" link="/BuatPantun" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default FormPersonalData