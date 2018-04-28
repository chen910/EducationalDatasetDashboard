let DataFrame = dfjs.DataFrame;

window.onload=function(){
    addTableListener('libraryBtn', LIBRARY_URL)
    addTableListener('WIFIBtn', WIFI_URL)
    addTableListener('eschoolBtn', ESCHOOL_URL)
    addTableListener('hschoolBtn', HSCHOOL_URL)
    addTableListener('dschoolBtn', DSCHOOL_URL)
}

let addTableListener= (btnName, datasetName) => {
    document.getElementById(btnName).addEventListener('click', () => {
        DataFrame.fromCSV(datasetName).then(df => {
            drawTable(df);
        });
    });
}



