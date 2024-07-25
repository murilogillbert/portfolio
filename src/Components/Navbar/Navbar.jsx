import { useState } from "react"
export default function Navbar() {

    const [siteStyle, setSiteStyle] = useState('black-btn.png')

    const changeSiteColor = () => {
        siteStyle === 'black-btn.png' ? setSiteStyle('black-btn.png') : setSiteStyle('white-btn.png')
    }

    return (
        <>
            <div id="logo"><img src="logo.png" alt="logo" /></div>
            <div id="menu-itens">
                <a href="sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
                <img src={siteStyle} alt="" onClick={() => changeSiteColor} />
            </div>
        </>
    )
}