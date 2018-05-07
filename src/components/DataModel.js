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

let getSelectedColumn = () => {
    let colBox = [];
    let selectedBox = document.querySelectorAll(".columnCheckbox");
    for (let i = 0; i < selectedBox.length; i++) {
        if (selectedBox[i].type === 'checkbox' && selectedBox[i].checked === true) {
            colBox.push([i, selectedBox[i].value]);
        }
    }
    // console.log(colBox);
    return colBox;
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