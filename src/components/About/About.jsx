import React from 'react'
import './About.css';


function About() {
  return (
    <div className='hiddenSection'>

      <div class="bg-white mb-5  mt-4">
        <div className=" p-5 bg-gray-100">
          {/* Headding */}

          <div className='section-title aos-init aos-animate' data-aos="fade-up">
            <h2>
              <span className='beforr'></span>
              Services
              <span className='afterr'></span>
            </h2>
            <p>And in that moment, I swear we were infinite</p>
          </div>

          {/* First section */}
          <section id="services" class="bg-gray-100 py-10 ">
            <div class="container mx-auto text-center">


              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div id='service' class="bg-white rounded-lg shadow-lg p-6">
                  <i class="fas fa-code text-3xl text-indigo-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Web Development</h3>
                  <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>


                <div id='service' class="bg-white rounded-lg shadow-lg p-6">
                  <i class="fas fa-paint-brush text-3xl text-indigo-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Graphic Design</h3>
                  <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>


                <div id='service' class="bg-white rounded-lg shadow-lg p-6">
                  <i class="fas fa-mobile-alt text-3xl text-indigo-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Mobile App Development</h3>
                  <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                


              </div>
            </div>
          </section>




        </div>
      </div>
    </div>

  )
}

export default About
