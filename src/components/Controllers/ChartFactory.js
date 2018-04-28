let chartFactory = (chartType, chartData) => {
    switch(chartType){
        case 'bar':
            barChart(chartData);
            break;
        case 'line':
            lineChart(chartData);
            break;
        case 'pie':
            pieChart(chartData);
            break;
        case 'doughnut':
            doughnutChart(chartData);
            break;
        case 'stack':
            stackChart(chartData);
            break;
    }

}



