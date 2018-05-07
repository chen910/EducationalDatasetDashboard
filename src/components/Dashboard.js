let DataFrame = dfjs.DataFrame;

window.onload=function(){
    addTableListener('schoolBtn', SCHOOL_URL);
    addTableListener('cwurBtn', CWUR_URL);
    addTableListener('sjtuBtn', SJTU_URL);
    addTableListener('timesBtn', TIMES_URL);
    addTableListener('OECDBtn', OECD_URL);
}

let addTableListener= (btnName, datasetName) => {
    document.getElementById(btnName).addEventListener('click', () => {
        DataFrame.fromCSV(datasetName).then(df => {
            drawTable(df);
        });
    });
}



