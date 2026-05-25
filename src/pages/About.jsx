import './About.css'
import { useRef, useState } from 'react'

export default function About() {
    const carouselRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    function nextSlide() {
        carouselRef.current.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth'
        })
    }

    function prevSlide() {
        carouselRef.current.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth'
        })
    }

    function handleScroll() {
        const scrollX = carouselRef.current.scrollLeft

        const width = carouselRef.current.offsetWidth

        const index = Math.round(scrollX / width)

        setCurrentSlide(index)
    }

    return (
        <main className="about">
            <button className='arrow left' onClick={prevSlide}>
                «
            </button>

            <div
                className='carousel'
                ref={carouselRef}
                onScroll={handleScroll}
            >
                <section className="slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde dolorem quidem est nostrum, tempore recusandae suscipit totam aperiam doloremque.</p>
                </section>

                <section className='slide'>
                    <p>Lorem ipsum dolor sit amet.</p>
                </section>

                <section className='slide'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a.</p>
                </section>
            </div>
            <div className='dots'>
                <span className={currentSlide === 0 ? 'active' : ''}></span>
                <span className={currentSlide === 1 ? 'active' : ''}></span>
                <span className={currentSlide === 2 ? 'active' : ''}></span>
            </div>

            <button className='arrow right' onClick={nextSlide}>
                »
            </button>

        </main>
    )
}