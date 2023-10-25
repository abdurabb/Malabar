import React from 'react'
import './AboutUs2.css';
function AboutUs2() {
    return (
        <div id='about' className='bg-white mb-5 mt-4  hiddenSection'>
            <div className='section-title aos-init aos-animate' data-aos="fade-up">
                <h2>
                    <span className='beforr'></span>
                    About Us
                    <span className='afterr'></span>
                </h2>
                <p>And in that moment, I swear we were infinite</p>
            </div>


            <section id="about" class="bg-white  ">
                <div class="container mx-auto text-center">


                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2">
                            {/* <img src="your-image-url.jpg" alt="About Us" class="w-full rounded-lg shadow-lg"> */}
                            <img src="https://thumbs.dreamstime.com/b/peapod-grocery-delivery-truck-green-stop-shop-making-new-jersey-62097616.jpg" alt="About Us" className="w-full h-[80%] rounded-lg shadow-lg" />
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-2">Our Story</h3>
                            <p class="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et auctor dapibus. Vivamus ac bibendum odio.
                            </p>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
                            <p class="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et auctor dapibus. Vivamus ac bibendum odio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default AboutUs2
