import React from 'react'
import './Perks.css'

function Perks() {


    return (
        <div id='features' class="features  hiddenSection">
            <div className='container'>
                <div className='section-title aos-init aos-animate' data-aos="fade-up">
                    <h2>
                        <span className='beforr'></span>
                        Perks & Benifites
                        <span className='afterr'></span>
                    </h2>
                    <p>And in that moment, I swear we were infinite</p>
                </div>

                {/* ------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {/* <!-- Card 1 --> */}
                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* <!-- Card 5 (This will be displayed on small screens) --> */}
                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div id='perk' class="bg-white rounded-lg shadow-lg p-4">
                        <h3 class="text-lg font-semibold mb-2">Benefit 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>



                {/* ------------- */}
            </div>
        </div>
    )
}

export default Perks
