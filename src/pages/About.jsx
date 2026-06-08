import './About.css'
import { useRef, useState } from 'react'

import sobre1 from '../assets/img/sobre1.png'
import sobre2 from '../assets/img/sobre2.png'
import sobre3 from '../assets/img/sobre3.png'

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
        <main className="page-content about">
            <button className='arrow left' onClick={prevSlide}>
                «
            </button>

            <div
                className='carousel'
                ref={carouselRef}
                onScroll={handleScroll}
            >
                <section className='slide'>
                    <h1>Sobre o projeto</h1>
                    <p>O "Passo Verde" nasceu da percepção da falta de árvores nas ruas e de como isso afeta diretamente a qualidade de vida da população, especialmente devido às temperaturas cada vez mais altas, e tem como objetivo promover cidades mais sustentáveis através do incentivo ao plantio de árvores nas calçadas.</p>
                    <p>Nossa missão é gerar interesse e levar um pouco de informação sobre as diversas espécies que podemos encontrar por aí!</p>
                </section>
                <section className="slide">
                    <h2>Benefícios</h2>
                    <img src={sobre1} className='slide-photo1' />
                    <h3>Sociais e Saúde</h3>
                    <p>Mais qualidade de vida</p>
                </section>

                <section className='slide'>
                    <h4>Redução de ruído</h4>
                    <p>Barreiras naturais contra o barulho urbano</p>
                    <h4>Melhora da saúde mental e física das pessoas</h4>
                    <p>O contato com a natureza promove a queda da ansiedade e do estresse e incentiva a prática de atividades físicas</p>
                    <h4>Redução da violência</h4>
                    <p>Estudos mostram menor criminalidade em áreas mais arborizadas</p>
                </section>

                <section className='slide'>
                    <h3>Ambientais</h3>
                    <h4>Regulação térmica</h4>
                    <p>Redução da temperatura e do efeito de ilha de calor por meio de sombra e absorção dos raios solares</p>
                    <p>Microclimas mais amenos</p>
                    <h4>Melhoria da qualidade do ar</h4>
                    <p>Absorvem dióxido de carbono e liberam oxigênio</p>
                    <h4>Gestão da água</h4>
                    <p>Retém água da chuva, diminui o escoamento superficial e a erosão, atuando na prevenção de enchentes</p>
                </section>

                <section className='slide'>
                    <img src={sobre2} className='slide-photo2' />
                    <h3>Econômicos</h3>
                    <h4>Valorização imobiliária</h4>
                    <p>Áreas verdes bem cuidadas aumentam o valor das propriedades</p>
                    <h4>Economia de energia com climatização</h4>
                    <p>Diminui a necessidade de ar-condicionado</p>
                </section>

                <section className='slide'>
                    <h3>Vida selvagem</h3>
                    <h4>Enriquecem a fauna urbana</h4>
                    <p>Servem de abrigo e alimento para pássaros e outros animais</p>
                    <img src={sobre3} className='slide-photo3' />
                    <p>Vamos plantar?!</p>
                    <p className='warning'>⚠️ Essa prática deve ser realizada em conjunto com a prefeitura do seu município, que ficará responsável pela análise da espécie mais adequada para a sua região! Para mais informações, consulte o guia de arborização da sua cidade. 🌿</p>
                </section>

                <section className='slide'>
                    <h2>Créditos</h2>
                    <p className='mrg1'>Site desenvolvido para fins educacionais, como parte da Atividade Extensionista de graduação.</p>

                    <h3>Informações técnicas</h3>
                    <h4>Versão</h4>
                    <p>1.0</p>
                    <h4>Desenvolvedora</h4>
                    <p>Stefany Sato</p>
                    <h4>Instituição</h4>
                    <p>UNINTER - Centro Universitário Internacional</p>
                    <p className='mrg1'>© 2026 Passo Verde</p>


                </section>

            </div>
            <div className='dots'>
                <span className={currentSlide === 0 ? 'active' : ''}></span>
                <span className={currentSlide === 1 ? 'active' : ''}></span>
                <span className={currentSlide === 2 ? 'active' : ''}></span>
                <span className={currentSlide === 3 ? 'active' : ''}></span>
                <span className={currentSlide === 4 ? 'active' : ''}></span>
                <span className={currentSlide === 5 ? 'active' : ''}></span>
                <span className={currentSlide === 6 ? 'active' : ''}></span>
            </div>

            <button className='arrow right' onClick={nextSlide}>
                »
            </button>
        </main>
    )
}