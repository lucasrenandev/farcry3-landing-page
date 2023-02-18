import { useRef, useState, useEffect } from "react"
import {BiMenu} from "react-icons/bi"
import {IoClose} from 'react-icons/io5'

const Header = () => {
    const navRef = useRef()
    const [icon, setIcon] = useState(BiMenu)

    const showMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setIcon(IoClose)
        }
    }

    const hiddenMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setIcon(BiMenu)
        })
    }

    useEffect(hiddenMenu)
    
    return(
        <header className="header">
            <a href="index.html" className="logo">FC3</a>

            <nav ref={navRef} onScroll={hiddenMenu} className="navbar">
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Jogabilidade</a></li>
                    <li><a href="#">História</a></li>
                    <li><a href="#">Enredo</a></li>
                    <li><a href="#">Desenvolvimento</a></li>
                </ul>{/*End navbar*/}
            </nav>{/*End navbar*/}

            <div onClick={showMenu} id="menu-icon">{icon}</div>
        </header>//End header
    )
}

export default Header