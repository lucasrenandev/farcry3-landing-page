import { useEffect } from 'react'
import homeImage from '../../assets/home.jpg'
import '../home/home.css'

export default function Home(){
    useEffect(() => {
        const sr = ScrollReveal({
            duration: 2300,
            distance: '50px',
        })

        sr.reveal(".home-text", {delay: 200, origin: "left"})
        sr.reveal(".home-image", {delay: 200, origin: "right"})
    }, [])

    return(
        <section className="home">
            <aside className="home-text">
                <h3>Ubisoft montreal</h3>
                <h1>Far cry 3</h1>
                <p>Far Cry 3 é um jogo eletrônico de 2012 dos gêneros tiro em primeira pessoa e mundo aberto desenvolvido pela Ubisoft Montreal em conjunto com a Ubisoft Massive, a Ubisoft Reflections, e a Ubisoft Shanghai.</p>
                <a href="#" className="main-button">Ver mais</a>
            </aside>{/*End home text */}
        
            <figure className="home-image">
                <img src={homeImage} alt="Main image" />
            </figure>{/*End home image*/}
        </section>//End home section
    )
}