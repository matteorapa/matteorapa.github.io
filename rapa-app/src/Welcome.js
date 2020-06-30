import React from 'react';
import bonrapetit from './assets/bon_rapetit_preview.png';
import nemesys from './assets/nemesys_preview.png';
import myvault from './assets/myvault_preview_white.png';
import myvaultb from './assets/myvault_preview.png';
import cv from './assets/MatteoRapa_CV.pdf'
import './App.css';

function Welcome() {
  return (
      <div className="focused"><br />
      <br />
      <h1>Projects</h1>
        <div className="list">
          <a href="https://developer.matteorapa.com/projects/bonrapetit/" target="_blank">
            <div className="project">
                <img className="preview" src={bonrapetit}/>
                <p>Bonrapetit</p>
                <p className="software">Restaurateur website</p>
             </div>
          </a>
          <div className="project">
            <img className="preview" src={nemesys}/>
            <p>Nemesys</p>
            <p className="software">Reporting software</p>
          </div>
        </div>

        <a href="https://myvault.technology" target="_blank">
              <div className="list project">
                <div>
                  <img className="preview" src={myvault}/>
                  <p>MyVault</p>
                  <p className="software">Expense tracker</p>
                </div>

              
              <div>
                <img className="preview" src={myvaultb}/>
              </div>
            
            </div>
          </a>
    
      <h1>Cirriculum Vitae</h1>
      <a href={cv} target="_blank" className="software"><u>Open Matteo's CV</u></a>
      <br /><br />
      <iframe className="cv" src="https://docs.google.com/document/d/e/2PACX-1vTlcuPvT122kkhIUg_WORON6EUbzvzGwjlYXYs-ECrSIN5tXQESlR-R4gKTdtPBK1YLnIHYLlg0mgGN/pub?embedded=true"></iframe></div>

  );
}

export default Welcome;