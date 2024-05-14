import tag_1 from '../static/assets/img/1.png'
import tag_2 from '../static/assets/img/2.png'
import tag_3 from '../static/assets/img/3.png'

export function Home() {
    return (
        <>
            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src={tag_1} alt="..."/>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Shoreline</h4>
                                <p className="text-black-50 mb-0">
                                    Grayscale is open source and MIT licensed. This means you
                                    can use it for any project - even commercial projects! Download it, customize it,
                                    and publish your website!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={tag_2} alt="..."/>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">PHÒNG SUITE HƯỚNG BIỂN</h4>
                                        <p className="mb-0 text-white-50">
                                            Được trang trí với tông màu dịu nhẹ kết hợp với
                                            những đồ thủ công trang trí mang đậm hơi thở văn hóa Chăm-pa của địa phương,
                                            căn phòng được chia tầng rõ rệt. Ở dưới là khu vực sinh hoạt với ghế sofa
                                            chữ L và ở trên là giường ngủ tạo cảm giác trang nhã mà rất thân thuộc như ở
                                            nhà.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={tag_3} alt="..."/>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">PHÒNG STUDIO SUITE HƯỚNG BIỂN</h4>
                                        <p className="mb-0 text-white-50">
                                            Được trang trí với tông màu dịu nhẹ kết hợp với
                                            những đồ thủ công trang trí mang đậm hơi thở văn hóa Chăm-pa của địa phương,
                                            căn phòng được chia tầng rõ rệt. Ở dưới là khu vực sinh hoạt với ghế sofa
                                            chữ L và ở trên là giường ngủ tạo cảm giác trang nhã mà rất thân thuộc như ở
                                            nhà.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="signup-section" id="signup" >
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                            <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="row input-group-newsletter">
                                    <div className="col">
                                        <input className="form-control" id="emailAddress" type="email"
                                               placeholder="Enter email address..."
                                               aria-label="Enter email address..."
                                               data-sb-validations="required,email"/>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary disabled" id="submitButton" type="submit">
                                            Notify Me!
                                        </button>
                                    </div>
                                </div>
                                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">
                                    An email is required.
                                </div>
                                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">
                                    Email is not valid.
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3 mt-2 text-white">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section bg-black">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">+1 (555) 902-8832</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-flex justify-content-center">
                        <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
