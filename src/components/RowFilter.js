let makeRowFilter = (row, colBox) => {
    let countedRowList = [];
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
        countedRowList.push(countedRow);
    }
    myDiv +=`
        </div>
        <button class="filterBtn" id='rowFilterBtn'>Apply Row Filter</button>
        <br>
        <br>
        <p>Please Select The Filter Conditions</p>
        <div id="numerical-condition">
				<input type="radio" name="numericalFilter" value="greaterThanEqualTo"> Greater Than Equal To <br>
				<input type="radio" name="numericalFilter" value="lessThanEqualTo"> Less Than Equal To<br>
				<input type="radio" name="numericalFilter" value="equalTo"> Equal To<br>
		</div>
		<p>Please Enter Numerical Value To Filter</p>
		<div id="numerical-value">
				<input id="numericalFilter" style="background-color: white; border: groove;color: black;padding: 1px 0px; text-align: center; text-decoration: none;" type="number" name="numericalFilter" value="numericalFilter">
		</div>
    `;
    // console.log(countedRowList);
    document.getElementById("rowFilter").innerHTML = myDiv;
    addRowFilterListener(countedRowList);
}

let addRowFilterListener = (countedRowList) => {
    document.getElementById('rowFilterBtn').addEventListener('click', () => {
        let checkedRowBox = getSelectedRow();
        makeChartFilter(checkedRowBox, countedRowList);
    });
}




