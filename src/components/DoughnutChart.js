let doughnutChart = (chartData) => {
    let numValues = [];
    let bgColor = [];
    let borderColor = [];
    let count = 0;
    let resultLabels =[];
    for(let key in chartData){
        resultLabels.push(key);
        numValues.push(chartData[key]);
        if(count%5 === 0){
            bgColor.push('rgba(255, 99, 132, 0.2)');
            borderColor.push('rgba(255, 99, 132, 1)');
        }
        else if(count%5 === 1){
            bgColor.push('rgba(54, 162, 235, 0.2)');
            borderColor.push('rgba(54, 162, 235, 1)');
        }
        else if(count%5 === 2){
            bgColor.push('rgba(153, 102, 255, 0.2)');
            borderColor.push('rgba(153, 102, 255, 1)');
        }
        else if(count%5 === 3){
            bgColor.push('rgba(75, 192, 192, 0.2)');
            borderColor.push('rgba(75, 192, 192, 1)');
        }
        else if(count%5 === 4){
            bgColor.push('rgba(255, 159, 64, 0.2)');
            borderColor.push('rgba(255, 159, 64, 1)');
        }
        count += 1;
    }

    let ctx = document.getElementById("doughnutChart");
    ctx.style.display = "block";

    let doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: resultLabels,//xaxis
            datasets: [{
                label: '#Number of each checked data set',
                data: numValues,//yaxis
                backgroundColor: bgColor,
                borderColor: borderColor,
            }]
        }
    });


}
