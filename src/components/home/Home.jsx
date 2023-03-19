import homeImage from '../../assets/home.jpg'
import Fade from 'react-reveal/Fade'
import '../home/home.css'

const Home = () => {
    return(
        <section className="home">
            <Fade left distance={"80px"} duration={2000} delay={200}>
                <aside className="home-text">
                    <h3>Ubisoft montreal</h3>
                    <h1>Far cry 3</h1>
                    <p>Far Cry 3 é um jogo eletrônico de 2012 dos gêneros tiro em primeira pessoa e mundo aberto desenvolvido pela Ubisoft Montreal em conjunto com a Ubisoft Massive, a Ubisoft Reflections, e a Ubisoft Shanghai.</p>
                    <a href="#" className="main-button">Ver mais</a>
                </aside>{/*End home text */}
            </Fade>

            <Fade right distance={"80px"} duration={2000} delay={200}>
                <figure className="home-image">
                    <img src={homeImage} alt="Main image" />
                </figure>{/*End home image*/}
            </Fade>
        </section>//End home section
    )
}

export default Home