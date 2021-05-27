import React from 'react';

class Footer extends React.Component {
    render() {
        const linkedinLogo = "https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo-1.png";
        const githubLogo = "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png";
        return(
            <footer className={"footer"}>
                <p>Codado e Estilizado por Gabriel Medeiros</p>
                <a href="https://www.linkedin.com/in/gabrielmedeiro5/"><img className={"footer-logo"} alt="imagem logotipo da rede social LinkedIn" src={linkedinLogo}></img></a>
                <a href="https://github.com/markyangit"><img className={"footer-logo"} alt="imagem logotipo da ferramenta github" src={githubLogo}></img></a>
            </footer>
        )
    }
}

export default Footer;