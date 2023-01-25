import './index.css';
import React from 'react';
import Secound_form from './Secound_form';

class Generate_Imput_As_Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.to_send={ value : ''};
        this.current_Edyting = {value : 'Nic'};
        this.to_json={ value:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
      var a = {"data_to_json" : document.getElementById("data_to_serwer").value}
      alert(a)
        fetch('http://localhost:8000/send_data_to_serwer', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body : JSON.stringify(a)

        }).then(function(response) {
          console.log(response)
          return response.json();
      });

        
        

    }
    render() {
      return (
          <div>
              <div id="Data_To_Serwer">{this.to_send.value}</div>
              <form onSubmit={this.handleSubmit}>
                      <div id="First_form">
                          <div id="Password" className="Edit_Form"> Wpisz hasło </div>
                          <input id="Password_imput" className="Edit_Form" type="text" value={this.state.value} onChange={this.handleChange} />
                          <div id="Submit_Password" className="Edit_Form">Wyślij</div>
                          <input type="text" value = {this.to_json.value} id = "data_to_serwer" onChange={this.handleChange}/>
                      </div>
                      <div id = "Secound_form">
                        <div id = "Projekts_Column">Projekty</div>
                        <div id = "Elements_Column">Elementy projektu</div>
                        <div id = "Edit_Column">Edycja</div>
                        <Secound_form/>
                        
                        <input type="submit" value="Submit"/>
                      </div>
              </form>
          </div>
      );
    }
  }
  
function Imput_As_Admin()
{
    return(
        <Generate_Imput_As_Admin/>
    );
}
export default Imput_As_Admin;