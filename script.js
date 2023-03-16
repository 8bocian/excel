let vals = Array(8*8).fill(0)
const excelArr = document.getElementById("excel")

window.onload = function(){
    let cells = document.getElementsByClassName("cell");
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", getVal, false);
        cells[i].param = i;
    }
}

function getVal(event){
    let idx = event.currentTarget.param
    if(vals[idx] == 0){
        vals[idx] = 1;
        event.target.
    } else {
        vals[idx] == 0;
    }
}