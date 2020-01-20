import React, { Component } from 'react'
import { Bar, line, Pie, Line } from 'react-chartjs-2';
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import facade from "../ApiFacade.js"

class M7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataFromBackend: {},
            chartData1: {
                labels: ['kl:6','kl:7','kl:8','kl:9','kl:10','kl:11','kl:12','kl:13','kl:14','kl:15','kl:16','kl:17','kl:18','kl:19','kl:20','kl:21','kl:22','kl:23','kl:24'],
                datasets: [
                    {
                        label: 'Good',
                        stack: 'Stack 0',
                        data: [],
                        backgroundColor: [
                            'green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green'
                        ],
                        fill: [
                            'false'
                        ]
                    },{

                        label: 'Bad',
                        stack: 'Stack 0',
                        data: [],
                        backgroundColor: [
                            'red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red'
                        ],
                        fill: [
                            'false'
                        ]
                        
                          
                    },
                    
                    
                ]
            },
            chartData2: {
                labels: ['1', '2', '3','4', '5', '6','7'],
                datasets: [
                    {
                        label: 'a',
                        data: [],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: [
                            'false'
                        ]
                    },
                    {
                        label: 'b',
                        data: [],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: [
                            'false'
                        ]
                    },
                    {
                        label: 'c',
                        data: [],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: [
                            'false'
                        ]
                    },
                    {
                        label: 'd',
                        data: [],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: [
                            'false'
                        ]
                    },{
                        label: 'average',
                        data: [],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: [
                            'false'
                        ]

                    }
                    
                ]
            }
        }
    }
    async componentDidMount() {
        const data = await facade.fetchDataM7Cycling();
        const data1 = await facade.fetchDataM7goodBad();
     /*   var orderIds = data.map(row => row.orderId)
        var chart1 = this.state.chartData1
        chart1.datasets[0].data = orderIds
        this.setState({chartData1: chart1 });*/

        var aFixture = data.aFixture.map(row => row)
        var chart2 = this.state.chartData2
        chart2.datasets[0].data = aFixture
        this.setState({chartData2: chart2});

        var bFixture = data.bFixture.map(row => row)
        var chart2 = this.state.chartData2
        chart2.datasets[1].data = bFixture
        this.setState({chartData2: chart2});

        var cFixture = data.cFixture.map(row => row)
        var chart2 = this.state.chartData2
        chart2.datasets[2].data = cFixture
        this.setState({chartData2: chart2});

        var dFixture = data.dFixture.map(row => row)
        var chart2 = this.state.chartData2
        chart2.datasets[3].data = dFixture
        this.setState({chartData2: chart2});

        var fixtureAverage = data.fixtureAverage.map(row => row)
        var chart2 = this.state.chartData2
        chart2.datasets[4].data = fixtureAverage
        this.setState({chartData2: chart2});

        var goodProduction = data1.goodProduction.map(row => row)
        var chart1 = this.state.chartData1
        chart1.datasets[0].data = goodProduction
        this.setState({chartData1: chart1});

        var badProduction = data1.badProduction.map(row => row)
        var chart1 = this.state.chartData1
        chart1.datasets[1].data = badProduction
        this.setState({chartData1: chart1});


    }

render() {
   //{this.state.dataFromBackend[0] && console.log(this.state.dataFromBackend[0].orderId)}
   {this.state.dataFromBackend[0] && console.log(this.state.dataFromBackend)}
    return (
        <div className="row">
            <div className="col-sm-6">
                <Bar
                    data={this.state.chartData1}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false
                        ,
                        scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    } }}
                    
                />
            </div>
            <div className="col-sm-6">
                <Line
                    data={this.state.chartData2}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col-sm-6">
                <Bar
                    data={this.state.chartData1}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
                
            </div>
            

        </div>
    )
}

}
export default M7
