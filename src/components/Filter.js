let makeColumnFilter = (column, row) => {
    let myDiv = "";
    myDiv += `
        <p>Please Select the Data Labels(Columns)</p>
        <button class="filterBtn" id='columnFilterBtn'>Apply Column Filter</button>
`;
    column.forEach((column) => myDiv += `
        <label><input type="checkbox" id="columnCheckbox" name="${column}" value="${column}">${column} </label>
    `);
    document.getElementById("columnFilter").innerHTML = myDiv;
    addColFilterListener(row);

}

let addColFilterListener = (row) => {
     document.getElementById('columnFilterBtn').addEventListener('click', () => {
         let colBox = getSelectedColumn();
         makeRowFilter(row, colBox);
     });
}

let getSelectedColumn = () => {
    let colBox = [];
    let selectedBox = document.querySelectorAll("#columnCheckbox");
    for (let i = 0; i < selectedBox.length; i++) {
        if(selectedBox[i].type === 'checkbox' && selectedBox[i].checked === true) {
            colBox.push([i, selectedBox[i].value]);
        }
    }
    // console.log(colBox);
    return colBox;
}
let makeRowData = (row, columnindex) => {
    const countedRow = new Object();;
    for ( let i = 0; i < row.length; i++ ) {
        if ( countedRow.hasOwnProperty(row[i][columnindex])) {
            countedRow[row[i][columnindex]] += 1;
        } else {
            countedRow[row[i][columnindex]] = 1;
        }
    }
    // console.log(countedRow);
    return countedRow;
}
let makeRowFilter = (row, colBox) => {
    let countedRowObjectList = [];
    let myDiv = "";
    myDiv += `
        <p>Please Select the Data you want to plot(Rows)</p>
        <div align="center" id="categorical-filter-checkbox" style="display:flex; flex-flow:row wrap;">
    `;

    for (let i = 0; i < colBox.length; i++) {
        let countedRow = makeRowData(row, colBox[i][0]);
        myDiv += `
            <div style="margin-top: 14px; margin-right: 24px;">
                <label for="id">${colBox[i][1]}<br>
                    <select id="${colBox[i][1]}" multiple="multiple" size='6' style="width: 240px; overflow-x: auto;">
            `;
        for (let property in countedRow) {
            if (countedRow.hasOwnProperty(property)) {
                myDiv +=`
                    <option value="${property}">${property}</option>
                `;
            }
        }
        myDiv +=`
                    </select>
                </label>
            </div>
        `;
        countedRowObjectList.push(countedRow);
    }
    myDiv +=`
        </div>
        <button class="filterBtn" id='rowFilterBtn'>Apply Row Filter</button>
        <br>
    `;
    document.getElementById("rowFilter").innerHTML = myDiv;
    addChartFilterListener();
}

let addChartFilterListener = () => {
    document.getElementById('rowFilterBtn').addEventListener('click', () => {
        makeChartFilter();
    });
}

let makeChartFilter = () => {
    let myDiv = "";
    myDiv +=`
        <p>Please Select the Chart Type</p>
        
        <div align="left">
            <select id="selectChart" class="select-style">
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="pie">pie</option>
            <option value="doughnut">Doughnut</option>
            </select>

        </div>
        <button id="applyChart" class="filterBtn">Apply Chart</button>
        <br>
    `
    document.getElementById("chartFilter").innerHTML = myDiv;
    addApplyChartListener();
}

let addApplyChartListener = () => {
    document.getElementById('applyChart').addEventListener('click', () => {
        drawChart();
    });
}
