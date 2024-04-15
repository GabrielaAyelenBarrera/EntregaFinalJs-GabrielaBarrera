import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p>&copy; DETOXIK TM - 2024. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p>Defendemos los derechos de los consumidores. <a href="#">Haz clic aquí para realizar reclamos</a>. / <a href="#">Botón de arrepentimiento</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
