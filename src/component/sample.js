import React, { Component } from 'react';
import axios from 'axios';
import {Bar ,Line, Pie} from 'react-chartjs-2';

export default class Sample extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            chartgraph:[],
        }
    }
    componentDidMount(){
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=JZRJCLH6VZWPLPNX`).
        then(result => {
            const chartdata = result.data;
            this.setState({ chartdata });
            var array = chartdata;
                // console.log(chartdata);   
            var dataset={
                    "chartData":{
                        "labels":[],
                        "datasets":[
                            {
                                "label":"Open",
                                "data":[],
                                "backgroundColor":[    
                                    
                                ]
                            }
                        ]
                    }
                }
                var it=254;
                var it1=0;
                var it2 =254;
                var it_inc = 5;
                var it1_inc = -5;
                var it2_inc = 5 ;
                for (var i in chartdata['Monthly Time Series'])
               {
                // console.log("i",i);
                    let date_arr = i.split("-")
                    var d = new Date(date_arr[0],date_arr[1],date_arr[2]);
                    var n = Math.ceil(d.getTime()/86400000);
                    // console.log("n",n);                    //    array[array.length] = {
                    dataset["chartData"]["datasets"][0]["data"].push(n);
                    var label = chartdata['Monthly Time Series'][i]["1. open"];
                    dataset["chartData"]["labels"].push(label); 
                    dataset["chartData"]["datasets"][0]["backgroundColor"].push('rgb('+it+','+it1+','+it2+')')
                    it=it+it_inc;
                    if(it<=0)
                    {
                        it_inc=+5
                    }
                    if(it>=255)
                    {
                        it_inc=-5
                    }
                    it1=it1+it1_inc;
                    if(it1<=0)
                    {
                        it1_inc=+5
                    }
                    if(it1>=255)
                    {
                        it1_inc=-5
                    }
                    it2=it2+it2_inc;
                    if(it2<=0)
                    {
                        it2_inc=+5
                    }
                    if(it2>=255)
                    {
                        it2_inc=-5
                    }
                    console.log("it",it);
                }
               
             this.setState({chartgraph:dataset});
            //  console.log("chartgraph", this.state.chartgraph[0].chartData);
            })  
            // if (dataset["chartData"]["labels"].length > 7) dataset["chartData"]["labels"].splice(0, dataset["chartData"]["labels"].length - 7);{
                //     // console.log("7",dataset["chartData"]["labels"]);
                // }
                // if (dataset["chartData"]["datasets"][0]["data"].length > 7) dataset["chartData"]["datasets"][0]["data"].splice(0, dataset["chartData"]["datasets"][0]["data"].length - 7);{
                //     // console.log("8",dataset["chartData"]["datasets"][0]["data"]);
                // }
                // console.log("8",dataset["chartData"]["datasets"]["data"]);
                // if (theArray.length > 10) theArray = theArray.slice(theArray.length - 10, 10);

            //   this.state.chartgraph=dataset["chartData"]
            //   console.log("sample",this.state.chartgraph);
    }
  
  render() {
    var xyz = this.state.chartgraph;
    console.log("xyz",xyz)
    // xyz = xyz[];
    
    return (
        <div>
            <Bar 
             data={xyz['chartData']}  
            />
        </div>
    )
  }
}