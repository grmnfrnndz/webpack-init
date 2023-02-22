import '../css/components.css';
import webpackLogo from '../assets/img/webpack-logo.png';


export const saludar = (name = 'sin nombre') => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `Hola, ${name} !!!`;
    document.body.append(h2);


    // img
    // console.log(webpackLogo);
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);


}
