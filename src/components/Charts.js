import React, { Component } from 'react'
import { Bar, line, Pie } from 'react-chartjs-2';
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['nick', 'rick', 'slick'],
                datasets: [
                    {
                        label: 'names',
                        data: [
                            16,
                            23,
                            388
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={250}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="col-sm-6">
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={250}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="col-sm-12">
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={250}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>

            </div>
        )
    }
}

export default Charts
