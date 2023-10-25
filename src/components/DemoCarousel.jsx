import React, { useState } from 'react'
import '../components/FirstSection/FirstSection.css';

function DemoCarousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        width: '100%',
        height: '100%',
        // borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`

    }

    const sliderStyles = {

        height: '100%',
        backgroundSize: "cover",

        // position: 'relative',

    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {

        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const dotsContainerStyles = {
        display: 'flex',
        // justifyContent: 'center'
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '60px'
    }

    const goToSlide = (idx) => {
        setCurrentIndex(idx)
    }
    return (

        <div className=' ' style={sliderStyles} >
            <div className=' slider  ' style={slideStyles}>
                {/* previous and next  */}

                {/* <div style={leftArrowStyles} onClick={goToPrevious} >{'<'}</div>
                <div style={rightArrowStyles} onClick={goToNext}>{'>'}</div> */}


                {/* dots */}
                <div className='  dotsContainerStyles ' style={dotsContainerStyles}>
                    {slides.map((slide, slideIndex) => (
                        <div dey={slideIndex} style={dotStyles} className='text-white' onClick={() => goToSlide(slideIndex)}>.</div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default DemoCarousel
