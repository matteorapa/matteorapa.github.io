import React from 'react';
import ns from './nemesys_preview.png';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="main focused">
      {/* <Header /> */}

      <div className="side-info"><br />
            <div className="flex-center">
              <img className="preview" src={ns}/>
              <div>
                <p>Nemesys</p>
                 <p className="software">Reporting software</p>
                 <br /><hr /><br />
              </div>
            </div>
            
            

           

            <p>Technologies</p>
            <ul>
              <li>Microsoft ASP.NET</li>
              <li>Razor Pages</li>
              <li>Entity framework</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              
            </ul>

            <p>Features</p>
            <ul>
              <li>Google+ third-party authentication</li>
              <li>Emailing service</li>
              <li>Google Maps Integration</li>
              
            </ul>

        

      </div>

      <div className="focused"><br />

        

      </div>

      
      

      {/* <Footer /> */}
    </div>
  );
}

export default App;