import React, { Component } from 'react';
import axios from 'axios';
import {Bar ,Line, Pie} from 'react-chartjs-2';
import { ProgressBar } from 'react-materialize';
import { Route, Link } from 'react-router-dom';
import { SIGPIPE } from 'constants';

export default class Chartjs extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/chartData`).then(result => {
            const chartdata = result.data;
            this.setState({ chartdata });
            console.log("dataset",chartdata)
        })
    }
    
  render() {
    return (
      <div>
        <Bar
            data={this.state.chartdata}  
        />
      </div>
    )
  }
}
