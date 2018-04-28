let makeRowData = (row, columnIndex) => {
    const countedRow = new Object();
    for ( let i = 0; i < row.length; i++ ) {
        if ( countedRow.hasOwnProperty(row[i][columnIndex])) {
            countedRow[row[i][columnIndex]] += 1;
        } else {
            countedRow[row[i][columnIndex]] = 1;
        }
    }
    // console.log(countedRow);
    return countedRow;
}
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
let getSelectedRow = () => {
    let selectedRow = [];
    // let selectedCatColumnValueMap = new Map();
    // let selectedNumColumnValueMap = new Map();
    // let numericalCheckBox = new Set();

    let filter = document.getElementById('categorical-filter-checkbox')
    for (let i = 0; i < filter.children.length; i++) {
        let childElement = filter.children[i].firstElementChild.childNodes;
        // console.log(childElement)
        // let columnName = childElement[0].data; //label field
        // console.log(columnName)
        let multiSelectDropDowns = childElement[3].options; // multi select dropdown field
        for (let j = 0; j < multiSelectDropDowns.length; j++) {
            if (multiSelectDropDowns[j].selected) {
                selectedRow.push(multiSelectDropDowns[j].value);
            }
        }
    }
    // for(let i = 0; i < filter.children.length ; i++){
    //     let childElement = filter.children[i].firstElementChild.childNodes;
    //     // console.log(childElement)
    //     let columnName = childElement[0].data; //label field
    //     // console.log(columnName)
    //     let multiSelectDropDowns = childElement[3].options; // multi select dropdown field
    //     let selectedCatValueSet = new Set();
    //     for(let j = 0 ; j< multiSelectDropDowns.length; j++){
    //         if(multiSelectDropDowns[j].selected){
    //             selectedCatValueSet.add(multiSelectDropDowns[j].value);
    //         }
    //     }
    //     if(selectedCatValueSet.size > 0){
    //         selectedCatColumnValueMap.set(columnName,selectedCatValueSet);
    //         console.log(selectedCatColumnValueMap);
    //     }
    // }
    // selectedRow.push(selectedCatColumnValueMap);

    // console.log(selectedRow);

    return selectedRow;
}



