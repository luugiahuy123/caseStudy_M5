import '../static/css/styles.css';   // Sửa lại đường dẫn cho đúng
import '../static/js/scripts';// Sửa lại đường dẫn cho đúng
import '../static/App.css'

function Header() {
    return (
        <>
            <header className="masthead">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top">Furama Resort</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#about">Customer</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about">Employ</a></li>
                                <li className="nav-item"><a className="nav-link" href="#projects">RentalService</a></li>
                                <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">FURAMA RESORT</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">LÀ 1 KHU NGHỈ DƯỞNG DƯỞNG TOẠ LẠC TẠI BẢI
                                BIỂN ĐÀ NẴNG 1 TRONG NHỮNG BẢI BIỂN ĐẸP NHẤT HÀNH TINH</h2>
                            <a className="btn btn-primary" href="#about">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;