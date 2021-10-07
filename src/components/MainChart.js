import React, { Component } from 'react';
import Chart from './chart/chart';

class MainChart extends Component {
    
    constructor(props){
        super(props);
        const config = props.labelsObj;
        const labels = Object.keys(config).map(key => config[key].label);
        const colors = Object.keys(config).map(key => config[key].color);
        const PercentageData = [65, 59, 80, 81, 56];
        this.state={
            chartKey: props.chartKey,
            labels: labels,
            datasets: {
                label: 'Rainfall',
                backgroundColor: colors,
                hoverBackgroundColor: colors,
                data: PercentageData,
            },
            config: config
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps.labelsObj);
        this.setState({
            config: nextProps.labelsObj
        })
    }
    chartCheckout = (chartKey) => {
        const { datasets:{ backgroundColor, hoverBackgroundColor, data}, labels } = this.state;
        return <Chart 
            configData={this.state.config}
            ChartType={chartKey} 
            PercentageData={data} 
            backgroundColor={backgroundColor} 
            hoverBackgroundColor={hoverBackgroundColor} 
            labels={labels} />
    }
    render() {
        const { chartKey } = this.props;
        console.log("this.props.labelsObj", this.props.labelsObj);
        
        return (
            <div>
               {chartKey && this.chartCheckout(chartKey)} 
            </div>
        );
    }
}

export default MainChart;
