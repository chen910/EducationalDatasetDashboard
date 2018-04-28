let makeChartFilter = (checkedRowBox, countedRowList) => {
    let myDiv = "";
    myDiv +=`
        <p>Please Select the Chart Type</p>
        
        <div align="left">
            <select id="selectChart" class="select-style">
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="pie">Pie</option>
            <option value="doughnut">Doughnut</option>
            <option value="stack">Stack</option>
            </select>

        </div>
        <button id="applyChart" class="filterBtn">Apply Chart</button>
        <br>
        <br>
    `
    document.getElementById("chartFilter").innerHTML = myDiv;
    addApplyChartListener(checkedRowBox, countedRowList);
}

let addApplyChartListener = (checkedRowBox, countedRowList) => {
    document.getElementById('applyChart').addEventListener('click', () => {
        resetCanvas();
        let chartType = getChartTypeSelection();
        let chartData = makeChartData(checkedRowBox, countedRowList);
        chartFactory(chartType, chartData);
        let chartContainer = document.getElementById("chartContainer");
        chartContainer.style.display = "flex";
    });
}

let getChartTypeSelection = () => {
    let chartType =  document.getElementById("selectChart").value;
    // console.log(chartType);
    return chartType;
}

let makeChartData = (checkedRowBox, countedRowList) => {
    let chartData = new Object();
    checkedRowBox.forEach((checkedBox) => {
        // console.log(checkedBox);
        for(let i=0; i< countedRowList.length; i++) {
            if(countedRowList[i][checkedBox]) {
                chartData[checkedBox] = countedRowList[i][checkedBox];
            }
        }
        })
    // console.log(chartData);
    return chartData;
}

let resetCanvas = () => {
    document.getElementById('chartContainer').innerHTML = `
        <canvas id="barChart" style="display:none;"></canvas>
        <canvas id="lineChart" style="display:none;"></canvas>
        <canvas id="pieChart" style="display:none;"></canvas>
        <canvas id="doughnutChart" style="display:none;"></canvas>
        <canvas id="stackChart" style="display:none;"></canvas>
    `;
}