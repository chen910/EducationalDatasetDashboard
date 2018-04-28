let makeColumnFilter = (column, row) => {
    let myDiv = "";
    myDiv += `
        <p>Please Select the Data Labels(Columns)</p>

    `;
    column.forEach((column) => myDiv += `
        <input type="checkbox" class="columnCheckbox" id="${column}" value="${column}"/><label for="${column}">${column}</label>
    `);
    myDiv += `
        <button class="filterBtn" id='columnFilterBtn'>Apply Column Filter</button>
        <br>
        <br>
    `;
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
    let selectedBox = document.querySelectorAll(".columnCheckbox");
    for (let i = 0; i < selectedBox.length; i++) {
        if (selectedBox[i].type === 'checkbox' && selectedBox[i].checked === true) {
            colBox.push([i, selectedBox[i].value]);
        }
    }
    // console.log(colBox);
    return colBox;
}