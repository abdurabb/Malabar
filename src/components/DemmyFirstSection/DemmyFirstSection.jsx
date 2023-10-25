import React from 'react'
import './DemmyFirstSection.css';

function DemmyFirstSection() {

    let styled = {
        margin: "-10px 0 30px 0",
        marginTop: '15px',
        fontSize: "3px",
        fontStyle: "Arial, Helvetica, sans-serif"
    }

    return (
        <section className='d-flex align-items-center  hero' id='hero' >
            <div className='container'>
                <div className='row'>
                    <div className="  col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" class="aos-init aos-animate">Welcome To Malabar </h1>
                        <h2 data-aos="fade-up" data-aos-delay="400" className=" mt-4 aos-init aos-animate">from Zero to Hero</h2>
                        <div style={styled} className=''>
                            <h5 data-aos="fade-up" class="h3-header aos-init aos-animate" data-aos-delay="400">
                                ✅ In depth High Quality Videos
                            </h5>
                            <h5 data-aos="fade-up" class="h3-header aos-init aos-animate" data-aos-delay="400">
                                ✅ In depth High Quality Videos
                            </h5>
                            <h5 data-aos="fade-up" class="h3-header aos-init aos-animate" data-aos-delay="400">
                                ✅ In depth High Quality Videos
                            </h5>
                            <h5 data-aos="fade-up" class="h3-header aos-init aos-animate" data-aos-delay="400">
                                ✅ In depth High Quality Videos
                            </h5>
                            <h5 data-aos="fade-up" class="h3-header aos-init aos-animate" data-aos-delay="400">
                                ✅ In depth High Quality Videos
                            </h5>
                        </div>
                    </div>

                    <div className="flex justify-center col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left" data-aos-delay="240">
                      {/* <img src="assets/img/nrs.jpg" width="100%"> */}
                      <img src="https://img.freepik.com/free-vector/safe-food-delivery-illustration_23-2148547690.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemmyFirstSection
