import React from 'react';
import {Pie, Bar, Line} from 'react-chartjs-2';
import "./chart.scss";

// const c1 = '#B21F00'
// const c2 = '#C9DE00'
// const c3 = '#2FDE00'
// const c4 = '#00A6B4'
// const c5 = '#6800B4'

class Chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            labels: this.props.labels,
            responsive: true,
            maintainAspectRatio: true,
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: this.props.backgroundColor,
                hoverBackgroundColor: this.props.hoverBackgroundColor,
                data: this.props.PercentageData
              }
            ],
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps in chart comp", nextProps);
        const { configData } = nextProps;
        const labels = configData.map(current => current.label);
        const colors = configData.map(current => current.color);
        let datasets = this.state.datasets;
        datasets[0].backgroundColor = colors;
        datasets[0].hoverBackgroundColor = colors;
        this.setState({labels, datasets})
    }
    
    checkoutChartName = () => {
        const { ChartType } = this.props;
        if(ChartType === "Pie"){
            return <Pie
            data={this.state}
            options={{
                title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}/>
        }
        else if(ChartType === "Line"){
            return <Line
                    data={this.state}
                    options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                    }}/>
        }
        else if( ChartType === "Bar"){
            return <Bar
                    data={this.state}
                    options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                    }}/>
        }
    }

    render(){
        console.log("this.props", this.props.configData);
        return(
            <div className="chart-container">
                {this.checkoutChartName()}
            </div>
        )
    }
}
export default Chart;