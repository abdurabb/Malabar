import React from 'react'
import './Founders.css'
function Founders() {
    return (
        <div className='bg-gray-100 mt-4 team section-bg  hiddenSection'>
            <div className='container'>
                <div class="section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>
                        <span className='before mr-4'></span>
                        Founders  <span className='  after'></span> </h2>

                </div>

                <section id="founders" class="bg-gray-100 py-10 ">
                    <div class="container mx-auto text-center">


                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div class="bg-white rounded-lg shadow-lg">
                                {/* <img src="founder1.jpg" alt="Founder 1" class="w-full h-40 object-cover rounded-t-lg"> */}
                                <img id='img' className='w-full' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold mb-2">John Doe</h3>
                                    <p class="text-gray-600">Co-Founder</p>
                                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>


                            <div class="bg-white rounded-lg shadow-lg">
                                {/* <img src="founder2.jpg" alt="Founder 2" class="w-full h-40 object-cover rounded-t-lg"> */}
                                <img id='img' className='w-full' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold mb-2">Jane Smith</h3>
                                    <p class="text-gray-600">Co-Founder</p>
                                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>


                            <div class="bg-white rounded-lg shadow-lg">
                                {/* <img src="founder3.jpg" alt="Founder 3" class="w-full h-40 object-cover rounded-t-lg"> */}

                                <img id='img' className='w-full' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" /> <div class="p-4">
                                    <h3 class="text-lg font-semibold mb-2">David Johnson</h3>
                                    <p class="text-gray-600">Co-Founder</p>
                                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>



            </div>
        </div>
    )
}

export default Founders
