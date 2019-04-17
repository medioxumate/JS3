/**
 * @author Brian Kiehn
 * @version 1.0
 * jsreview3.js - review from chapter 3
 * last edited: 4/16/2019
 */
document.open();

function heehaw(){
    var output = "<p>";

    for (let i = 1; i <= 100; i++) {
        if((i % 3 === 0) && (i % 5 ===0)){
            output += "Hee Haw!" + "<br>";
        }
        else if(i % 3 === 0){
            output += "Hee!" + "<br>";
        }
        else if(i % 5 === 0){
            output += "Haw!" + "<br>";
        }
        else{
            output += i + "<br>"
        }
    }
    output += "</p>";
    return output;
}

document.write(heehaw());
document.close();
