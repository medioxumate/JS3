/**
 * Created in PhpStorm
 * @author Brian Kiehn
 * @date 1/10/2020
 * @version 2.0
 * jsreview3.js - review from chapter 3
 * https://github.com/medioxumate/JS3.git
 * GreenRiverDev
 */
document.open();

let output;
let MIN;
let MAX;

function promp() {
    let temp;

    temp = prompt("pick the min:");
    MIN = parseInt(temp, 10);

    temp = prompt("pick the max:");
    MAX = parseInt(temp, 10);

    if (!isNaN(MIN) && !isNaN(MAX)) {
        output = "<p>";
        heeHaw(MIN);
    }
    else{
        if(isNaN(MIN)) {
            document.write("error: Min "+ MIN+";");
        }
        if(isNaN(MAX)){
            document.write(" error: Max "+ MAX+"; ");
        }
    }
}

function heeHaw(out){
    if(out === MAX+1) {
        output += "</p>";
        return output;
    }
    else {
        if(out % 3 === 0 || out % 5 === 0) {
            if (out % 3 === 0) {
                output += "Hee! ";
            }
            if (out % 5 === 0) {
                output += "Haw!";
            }
        }
        else {
            output += out;
        }
        output += "<br>";
        return heeHaw(out+1);
    }
}

promp();
document.write(output);
document.close();
