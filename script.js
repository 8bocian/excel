let vals = Array(9*9).fill(0);

window.onload = function(){
    const excelArr = document.getElementById("excel");

    const cellsIn = document.getElementsByClassName("cell");
    for(let i=0; i<cellsIn.length; i++){
        const input = document.createElement('input');
        input.type = 'number';
        cellsIn[i].appendChild(input);
    }


    let cells = excelArr.children;
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", function(event){
            let idx = event.currentTarget.param;
            if(idx%9!=0 && idx>8){
                const cell = document.querySelector(`#excel :nth-child(${idx+1})`);
                if(vals[idx] == 0){
                    vals[idx] = 1;
                    cell.style.background = "red";
                } else {
                    vals[idx] = 0;
                    cell.style.background = "white";
                }
            } else if (idx%9!=0 && idx<=8) {
                for(let k=idx+9; k<cells.length; k+=9){
                    const cell = document.querySelector(`#excel :nth-child(${k+1})`);
                    if(vals[k] == 0){
                        vals[k] = 1;
                        cell.style.background = "red";
                    } else {
                        vals[k] = 0;
                        cell.style.background = "white";
                    }
                }
            } else if (idx%9==0 && idx>8) {
                for(let k=idx+1; k<9+idx; k++){
                    const cell = document.querySelector(`#excel :nth-child(${k+1})`);
                    if(vals[k] == 0){
                        vals[k] = 1;
                        cell.style.background = "red";
                    } else {
                        vals[k] = 0;
                        cell.style.background = "white";
                    }
                }
            } else {
                for(let k=0; k<cells.length; k++){
                    if(k%9!=0 && k>8){
                        const cell = document.querySelector(`#excel :nth-child(${k+1})`);
                        if(vals[k] == 0){
                            vals[k] = 1;
                            cell.style.background = "red";
                        } else {
                            vals[k] = 0;
                            cell.style.background = "white";
                        }
                    }
                }
            }
        }, false);
        cells[i].param = i;
    }
}

function sum(){
    document.getElementById("output").innerText = findAllRed().reduce((a, b) => a + b, 0);
}

function sumAbs(){
    document.getElementById("output").innerText = findAllRed().reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}

function multiply(){
    document.getElementById("output").innerText = findAllRed().length ? findAllRed().reduce((a, b) => a * b, 1): 0;
}

function average(){
    document.getElementById("output").innerText = "" + findAllRed().reduce((a, b) => a + b, 0) / (findAllRed().length ? findAllRed().length : 1);
}

function findAllRed(){
    const cells = document.getElementsByClassName("cell");
    let reds = []; 
    for(let j=0; j<cells.length; j++){
        let cell = cells[j];
        if(cell.style.background == "red" && cell.firstChild.value.length != 0){
            reds.push(parseFloat(eval(cell.firstChild.value.replace(",", "."))));
        }
    }
    return reds;
}