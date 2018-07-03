import React from 'react';
import Chartjs from './chartjs';
import Sample from './sample';

export default class Showchart extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var abc = this.setState({value: event.target.value});
        console.log("abc",abc);
      }
      handleChange1(event) {
        var abc1 = this.setState({value: event.target.value});
        console.log("abc1",abc1);
      }
      handleChange2(event) {
        var abc2 = this.setState({value: event.target.value});
        console.log("abc2",abc2);
      }
    
      handleSubmit(event) {
        console.log('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
   

    render(){
        return(
            <div className="container showchart">    
                <form onSubmit={this.handleSubmit}>
                    <div className="showchart-button">
                        <div className="from-group select-button">
                            <select value={this.state.value} onChange={this.handleChange} className="form-control">
                                    <option value='' disabled> Select Year </option>
                                    <option value='2017' id="sample"> 2017 </option>
                                    <option value='2018'> 2018 </option>
                            </select>
                        </div>
                        <div className="from-group select-button">
                            <select value={this.state.value} onChange={this.handleChange1} className="form-control">
                                    <option value='' disabled> Select Month </option>
                                    <option value='firstsem'> Upto June</option>
                                    <option value='secondsem'> Upto December</option>
                            </select>
                        </div>
                    <div className="from-group select-button">
                        <select value={this.state.value} onChange={this.handleChange2} className="form-control">
                            <option value='' disabled>  Select Day </option>
                            <option  value="jan" > January</option>       
                            <option  value="feb" > February</option>       
                            <option  value="march" > March</option>       
                            <option  value="april" > April</option>       
                            <option  value="may" > May</option>       
                            <option  value="june" > June</option>       
                            <option  value="july" > July</option>       
                            <option  value="augt" > August</option>       
                            <option  value="sept" > September</option>       
                            <option  value="oct" > October</option>       
                            <option  value="nov" > November</option>       
                            <option  value="dec" > December</option>  
                        </select>
                        </div>
                        <input className="from-group select-button" type="submit" value="Submit" />
                        </div>
                    </form>

                <div className="chartgraph">
                     Chartjs 
                    <Sample />
                </div>
            </div>
        );
    }
} 