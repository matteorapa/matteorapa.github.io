import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="focused">

     
            <div className="sites">
                <a href="https://www.developer.matteorapa.com" className="shadow-button" ><i className="fas fa-terminal"></i> Developer</a>
                
                <a href="https://www.notes.matteorapa.com" className="shadow-button">Matteo's Notes</a>
            </div><br /><hr />

            <div className="split-end">
                <a href="https://www.matteorapa.com">Developed with ❤️ by Matteo Rapa, 2020</a>
                <div className="social split-end">
                    <a href="https://github.com/matteorapa" ><i className="fab fa-github"></i> Github</a>
                    <a href="https://mt.linkedin.com/in/matteo-rapa-558001195" ><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>
            </div>
            
    </footer>
    
  );
}

export default Footer;