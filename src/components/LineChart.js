let lineChart = (chartData) => {
    let numValues = [];
    let resultLabels = [];
    let resultMax = 0 ;
    for(let key in chartData){
        resultLabels.push(key);
        numValues.push(chartData[key]);
        if(chartData[key] > resultMax) resultMax = chartData[key];
    }
    document.getElementById("lineChart").style.display = "block";

    let ctx = document.getElementById("lineChart").getContext('2d');

    let chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "flex";

    let lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: resultLabels,//xaxis
            datasets: [{
                label: '#Number of each checked data set',
                data: numValues,//yaxis
                backgroundColor: "rgba(75,192,192,0.4)"
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        stepValue: 20,
                        max: resultMax
                    }
                }]
            }
        }
    });

}
