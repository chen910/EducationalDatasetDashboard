let  drawTable = (df) => {
    let row = df.toArray();
    let column = df.listColumns();

    let displayTable = "<table id='dataTable' class='display' style='width:100%'><thead><tr>";
    for (let i =0; i < column.length; i++) {
        displayTable+= "<th>" +column[i]+ "</th>";
    }
    displayTable+= "</tr></thead>";
    displayTable+= "<tbody>";
    for (var i = 1; i < row.length; i++) {
        displayTable+= "<tr>";
        for(var j=0;j<row[i].length;j++){
            displayTable+= "<td>" +row[i][j]+" </td>";
        }
        displayTable+="</tr>";
    }
    displayTable+="</table>";

    document.getElementById('table').innerHTML = displayTable;

    $('#dataTable').DataTable( {
        "scrollY": 600,
        "scrollX": true,
        "scrollCollapse": true,
        "paging": true,
        "ordering": true,
        "info": true,
        // "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    } );

    makeColumnFilter(column, row);

}