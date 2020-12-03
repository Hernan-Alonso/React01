import React from 'react';

const Footer = ({fecha}) => {
    //Es posible quitar el return y retornar todo dentro del parentesis (quitar return y llaves) unicamente se pasa html, de la otra manera Function Declaration, no es posible.
    return (
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
      );
}
 
export default Footer;