import React, { useEffect } from 'react'
import './Section2.css';

function Section2() {
    // ------
    useEffect(()=>{
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('reacheddddsf');
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        });
    
        //   const hiddenElement = document.querySelectorAll('.hiddenSection')
        const hiddenElement = document.querySelectorAll('.hiddenSection')
        hiddenElement.forEach((el) => { observer.observe(el) })
    },[])


    // ------

    return (
        <div id='mission' className='bg-gray-100 about'>
            <div className='container'>
                <div class="section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>
                        <span className='before mr-4'></span>
                        Mission  <span className='  after'></span> </h2>

                </div>


                <div className="row d-flex justify-content-center  hiddenSection">
                    <div className='col-lg-8 aos-init aos-animate' data-aos='fade-up' data-aos-delay="150">
                        <p>
                            The mission of this series is to take you from
                            <strong>Zero to Hero in React</strong>. During this journey, you
                            will learn everything by watching videos and then implement it
                            by building projects.
                        </p>

                        <p>
                            The curriculum is designed with the principle of `learn by
                            building`, so there will be a lot of Assignments/Projects you
                            will work on. So only register if you are ready for a grind.
                        </p>

                        <p>
                            The curriculum is designed with the principle of `learn by
                            building`, so there will be a lot of Assignments/Projects you
                            will work on. So only register if you are ready for a grind.
                        </p>

                        <p>
                            The curriculum is designed with the principle of `learn by
                            building`, so there will be a lot of Assignments/Projects you
                            will work on. So only register if you are ready for a grind.
                        </p>

                        <p>
                            The curriculum is designed with the principle of `learn by
                            building`, so there will be a lot of Assignments/Projects you
                            will work on. So only register if you are ready for a grind.
                        </p>


                        Limited seats. Register Now. ✌️

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2
