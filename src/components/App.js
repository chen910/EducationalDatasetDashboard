let DataFrame = dfjs.DataFrame;

window.onload=function(){
    document.getElementById('libraryBtn').addEventListener('click', () => {
        DataFrame.fromCSV(LIBRARY_URL).then(df => {
            drawTable(df);
        });
    });

    document.getElementById('WIFIBtn').addEventListener('click', () => {
        DataFrame.fromCSV(WIFI_URL).then(df => {
            drawTable(df);
        });
    });

    document.getElementById('eschoolBtn').addEventListener('click', () => {
        DataFrame.fromCSV(ESCHOOL_URL).then(df => {
            drawTable(df);
        });
    });

    document.getElementById('hschoolButn').addEventListener('click', () => {
        DataFrame.fromCSV(HSCHOOL_URL).then(df => {
            drawTable(df);
        });
    });

    document.getElementById('dschoolBtn').addEventListener('click', () => {
        DataFrame.fromCSV(DSCHOOL_URL).then(df => {
            drawTable(df);
        });
    });
}




