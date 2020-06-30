import React from 'react';

export default class DarkMode extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            darkMode : false
        }
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

     

    

    async toggleDarkMode(){  
        
        if(this.state.darkmode){
            this.setState({
                darkMode: false
              })
            this.light();
        }else {
            this.setState({
                darkMode: true
            })
           
            this.dark();
        }
    }

    light(){

        document.body.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        document.body.style.setProperty('--text-color', '#202020');
        document.body.style.setProperty('--light-color', '#707070');
        
        

    }

    dark(){

        document.body.style.setProperty('--background-color', 'rgb(35, 35, 35)');
        document.body.style.setProperty('--text-color', 'rgb(250, 250, 250)');
        document.body.style.setProperty('--light-color', 'rgba(25,25,28,0.65)');
       

    }

    render() {
        
            if(this.state.darkMode){
                return (
                    <button type="button" className="" onClick={this.toggleDarkMode}>Dark Mode <i className="far fa-moon"></i></button>
                  );
            }else {
                return (
                    <button type="button" className="" onClick={this.toggleDarkMode}>Light Mode <i className="far fa-lightbulb"></i></button>
                    
                  );
            }
        }
        

      
    }
  