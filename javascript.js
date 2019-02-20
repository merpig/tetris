/*$(document).ready(function() {
    /*console.log("1");
    for(var i = 2; i <= 100; i++){
        /*if (i%3===0 && i%5!==0){
            console.log("fizz");
        }
        else if (i%5===0 && i%3!==0){
            console.log("buzz");
        }
        else if (i%3===0 && i%5===0){
            console.log("fizz buzz");
        }
        else console.log(i);

        if((i%2!==0 && i%3!==0 && i%5!==0)||
            i===2 || i===3 || i===5) console.log("prime");
        else console.log(i);
    
    }

    for(var i = 2; i <= 100; i++){
        console.log(isPrime(i));

    }

    var numbers = [1, 326, 251, 24, 284, 364, 287, 74, 89, 63, 455, 130, 408, 378, 333, 49, 69, 335, 195, 145, 122, 454, 30, 277, 208, 293, 311, 88, 32, 5, 304, 239, 448, 61, 98, 382, 401, 452, 233, 150, 109, 252, 305, 51, 161, 480, 191, 44, 206, 451, 141, 182, 320, 355, 402, 439, 13, 430, 449, 119, 166, 493, 396, 139, 99, 262, 163, 410, 422, 275, 212, 416, 272, 394, 379, 211, 491, 11, 133, 361, 160, 338, 87, 199, 373, 38, 269, 73, 68, 359, 165, 291, 418, 159, 481, 289, 469, 23, 432, 2, 315, 247, 462, 189, 134, 330, 164, 153, 274, 371, 267, 377, 347, 201, 19, 475, 66, 260, 497, 466, 426, 12, 214, 306, 386, 194, 129, 219, 10, 288, 348, 188, 59, 440, 498, 447, 297, 446, 57, 313, 175, 80, 461, 312, 7, 215, 248, 107, 389, 46, 358, 229, 72, 15, 492, 240, 217, 420, 110, 20, 383, 124, 321, 183, 174, 374, 17, 488, 33, 256, 235, 353, 387, 117, 479, 147, 483, 424, 428, 205, 28, 392, 398, 216, 350, 34, 342, 135, 366, 125, 258, 329, 362, 308, 295, 441, 242, 95, 406, 411, 286, 14, 352, 433, 123, 340, 499, 101, 276, 37, 468, 298, 75, 438, 131, 138, 96, 64, 246, 476, 487, 151, 283, 106, 83, 273, 202, 323, 357, 414, 478, 172, 60, 121, 127, 152, 48, 415, 234, 156, 8, 171, 176, 41, 100, 413, 76, 128, 399, 132, 154, 423, 404, 302, 42, 341, 173, 126, 427, 369, 26, 453, 180, 184, 55, 167, 77, 307, 111, 445, 237, 16, 344, 290, 25, 356, 114, 316, 39, 336, 90, 3, 465, 162, 470, 343, 429, 303, 363, 29, 136, 203, 241, 4, 93, 221, 271, 395, 317, 339, 86, 225, 436, 325, 47, 442, 137, 285, 474, 337, 230, 376, 345, 245, 43, 236, 484, 318, 255, 105, 388, 397, 27, 6, 31, 148, 372, 35, 393, 460, 384, 349, 490, 264, 84, 300, 204, 482, 168, 67, 218, 331, 21, 473, 210, 496, 467, 431, 116, 405, 450, 327, 407, 261, 309, 157, 458, 223, 464, 224, 18, 142, 471, 457, 52, 82, 380, 263, 367, 324, 281, 97, 412, 85, 149, 346, 265, 368, 193, 266, 243, 434, 254, 456, 115, 118, 381, 70, 190, 94, 228, 296, 314, 257, 403, 170, 232, 250, 360, 65, 417, 351, 71, 62, 158, 365, 322, 500, 282, 375, 177, 187, 459, 112, 319, 155, 489, 391, 178, 463, 22, 53, 91, 435, 231, 56, 103, 36, 253, 477, 186, 45, 425, 120, 50, 140, 443, 146, 108, 259, 238, 192, 222, 213, 200, 227, 354, 437, 280, 207, 143, 310, 385, 370, 58, 444, 198, 278, 54, 494, 390, 113, 328, 144, 268, 78, 9, 102, 197, 301, 226, 220, 334, 419, 299, 409, 421, 292, 332, 209, 244, 196, 179, 472, 279, 40, 486, 270, 185, 181, 485, 495, 81, 169, 294, 79, 400, 92, 104, 249];
    for (var p = 0; p < numbers.length;p++) bubbleSort(numbers,0);
    for (var j = 0; j < numbers.length;j++) console.log(numbers[j]);
        
    
})

function isPrime(i){
    if((i%2!==0 && i%3!==0 && i%5!==0)||
        i===2 || i===3 || i===5) return "prime";
    else return i;
}


function bubbleSort(nums,j){
        if(nums[j+1]){
            if(nums[j] > nums[j+1]){
                var temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1]=temp;
                bubbleSort(nums,j+1);
            }
            else bubbleSort(nums,j+1);
        }
}*/


$(document).ready(function() {
    var grid = "";


    //grid system
    function init(){
        var row = 0;
        var col = 0;
        for(var i = 0; i < 9*9*2; i++){
            col++;
            if(i%9===0){
                grid += "<div row class='row' id='row" + row + "'>";
                col = 0;
            }

            grid+= "<div class='col' id='col" + row + "" + col + "'>"
            grid+= "<p id='status" + row + "" + col + "' >empty</p>"
            grid+= "</div>";

            if(i%9===8){
                grid += "</div>"
                row++;
            }
        }
    }

    
    var shapes = {
        shape: [1,2,3,4,5,6,7],
        color: ["red","green","yellow","orange","purple","blue","cyan"],
        rotation:   [[0,1,1,1,1,2,2],
                     [3,1,2,2,1,1,1],
                     [0,1,1,1,1,2,2],
                     [3,1,2,2,1,1,1]],
        startY: "1",
        startX: "4"
    }
/*
    function parseShape(int){
    }

    
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
    }
    */

    $.fn.redraw = function(){
        $(this).each(function(){
          var redraw = this.offsetHeight;
        });
      };
    var interval;
    var currentRow = 0;
    var shift = 0;
    var lastShift = 0;

    var previousRotation = 0;
    var currentRotation = 0;
    var currentShape = 0;

    var previousCols = [];
    var previousStatus = [];

    var currentCols = [];
    var currentStatus = [];

    var rotationChecked = true;
    var playing = false;
    var shiftEval = true;
    var previous = false;
    var eventLeft = true;
    var eventRight = true;
    var squareStatus = "empty";
    var attempt = 0;

    function run(){
        clearInterval(interval);
        playing = true;
        reset();
    }

    function resetLine(){
        var lineId = 0;
        var count = 0;
        for (var j = 18; j > 0; j--){
            for(var i = 0; i < 9; i++){
                if ($("#status"+j+""+i).html() === "filled"){
                    count++;
                }
            }
            if (count === 9){
                console.log("Reset Line called ------------");

                lineId = j;
                for (var p = lineId; p > 0; p--){
                    for(var i = 0; i < 9; i++){
                        $("#col"+p+""+i).css("background-color", $("#col"+(p-1)+""+i).css("background-color"));
                        $("#status"+p+""+i).html($("#status"+(p-1)+""+i).html());
                    }
                }
                for(var i = 0; i < 9; i++){
                    $("#col"+0+""+i).css("background-color", "silver");
                    $("#status"+0+""+i).html("empty");
                }
                j = j + 1;
            }
            //sleep(10);
            count = 0;
        }
        //reset
    }

    function reset(){
        clearInterval(interval);
        eventLeft = true;
        eventRight = true;
        previousRotation = 0;
        currentRotation = 0;
        currentRow = 0;
        shift = 0;
        lastShift = 0;
        previous = false;
        rotationChecked = true;
        squareStatus = "empty";
        attempt = 0;
        previousCols = [];
        currentCols = [];
        currentStatus = [];
        previousStatus = [];
        shiftEval = true;
        currentShape = Math.floor((Math.random() * 2));
        interval = setInterval(function(){drawShape(currentShape,shift,currentRow)}, 200   );
    }

    function drawShape(int, _shift, row){
        var tempColor = shapes.color[int];
        var startX = shapes.startX;
        var status;
        eventLeft = eventRight = true;
        if (currentShape === 0){
            
            for(var i = 0; i < 4; i++){
                if (currentRotation%2 === 0){
                    
                    var check1 = "#status" + (row-i) + "" + (parseInt(startX) + lastShift - 1);
                    var check2 = "#status" + (row-i) + "" + (parseInt(startX) + lastShift +1);

                    if($(check1).html() !== "empty") {
                        console.log("can't shift left");
                        eventLeft = false;
                        
                    }
                    else if($(check2).html() !== "empty") {
                        console.log("can't shift right");
                        //shift--;
                        //currentRow--;
                        eventRight = false;
                        //return;
                    }
                    else {
                        console.log("can shift");
                    }


                    currentCols[i] = "#col" + (row-i) + "" + (parseInt(startX) + _shift);
                    currentStatus[i] = "#status" + (row-i) + "" + (parseInt(startX) + _shift);

                }
                else if (currentRotation%2 === 1){
                    var check1 = "#status" + (row+1) + "" + (parseInt(startX) + shift - 1);
                    var check2 = "#status" + (row+1) + "" + (parseInt(startX) + shift +1+3);
                    if($(check1).html() !== "empty") {
                        console.log("can't shift left");
                        eventLeft = false;
                        //return;
                        
                    }
                    else if($(check2).html() !== "empty") {
                        console.log("can't shift right");
                        eventRight = false;
                        //return;
                    }
                    else {
                        console.log("can shift");
                        //eventLeft = true;
                        //eventRight = true;
                    }
                    currentCols[i] = "#col" + (row) + "" + (parseInt(startX) + shift+i);
                    currentStatus[i] = "#status" + (row) + "" + (parseInt(startX) + shift+i);
                
                    if($(currentStatus[i]).html()!=="empty"){
                        if (!rotationChecked) {
                            currentRotation = previousRotation;
                            rotationChecked = true;
                            return;
                        }
                        
                        reset();
                        resetLine();
                        return;
                    }
                }
            }
            rotationChecked = true;
        }
        if (currentShape === 1){
                if(0<currentRow < 17){
                    var checkStatus1 = "#status" + (row+1) + "" + (parseInt(startX)+ lastShift - 1);
                    var checkStatus3 = "#status" + (row+1) + "" + ((parseInt(startX) + lastShift + 2));
                    var checkStatus = "#status" + (row) + "" + (parseInt(startX)+ lastShift);
                    var checkStatus2 = "#status" + (row) + "" + ((parseInt(startX) + lastShift + 1));

                    if($(checkStatus1).html() !== "empty") {
                        console.log("can't shift left");
                        eventLeft = false;
                        
                    }
                    else if($(checkStatus3).html() !== "empty") {
                        console.log("can't shift right");
                        eventRight = false;
                    }
                    else {
                        console.log("can shift");
                        eventLeft = true;
                        eventRight = true;
                    }

                    if($(checkStatus).html() === "filled" || $(checkStatus2).html() === "filled") {
                        reset();
                        resetLine();
                        return;
                    }
                }

                currentCols[0] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                currentStatus[0] = "#status" + (row) + "" + (parseInt(startX) + _shift);

                currentCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                currentStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);

                currentCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift + 1);
                currentStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift + 1);

                currentCols[3] = "#col" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                currentStatus[3] = "#status" + (row-1) + "" + (parseInt(startX) + _shift + 1);     
        }

        if (currentShape == 2){

        }

        status = $(currentStatus[0]).html();
        if (currentShape === 1)
            squareStatus = $(currentStatus[2]).html();

        if (status==="empty" && playing && squareStatus === "empty"){

            if(previous) {
                for(var i = 0; i < 4; i++){
                    $(previousCols[i]).css("background-color", "silver");
                    $(previousStatus[i]).html("empty");
                }
            }

            var canShift = true;
            if(!shiftEval){

                if(currentShape === 0){
                    
                    for(var i = 0; i < 4; i++){
                        if (currentRotation%2 === 0){
                            currentCols[i] = "#col" + (row-i) + "" + (parseInt(startX) + _shift);
                            currentStatus[i] = "#status" + (row-i) + "" + (parseInt(startX) + _shift);
                        }
                        else if (currentRotation%2 === 1){
                            currentCols[i] = "#col" + (row) + "" + (parseInt(startX) + _shift+i);
                            currentStatus[i] = "#status" + (row) + "" + (parseInt(startX) + _shift+i);
                        }
                    
                        for(var j = 0; j < i; j++){
                            if($(currentStatus[j]).html()==="filled") canShift = false;
                        }
                    }

                    shiftEval = true;
                }
                if(currentShape === 1 ){

                    currentCols[0] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                    currentStatus[0] = "#status" + (row) + "" + (parseInt(startX) + _shift);
                    currentCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                    currentStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);
                    currentCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift + 1);
                    currentStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift + 1);
                    currentCols[3] = "#col" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                    currentStatus[3] = "#status" + (row-1) + "" + (parseInt(startX) + _shift + 1);

                    if (currentRow > 0){
                        if($(currentStatus[1]).html()==="filled") canShift = false;
                        if(currentRow > 1){
                            if($(currentStatus[2]).html()==="filled") canShift = false;
                            if (currentRow > 2){
                                if($(currentStatus[3]).html()==="filled") canShift = false;
                            }
                        }
                    }
                    if(!canShift){
                        for (var i = 0; i < 4; i++){
                            shift = lastShift;
                            currentCols[i] = previousCols[i];
                            currentStatus[i] = previousStatus[i];
                            $(currentStatus[i]).html("filled");
                            $(currentCols[i]).css("background-color", tempColor);
                        }
                    }
                    shiftEval == true;
                }

                if(canShift){
                    shiftEval = true; 
                    attempt=0;
                    lastShift = shift;
                    currentRow++;

                    for (var i = 0; i < 4; i++){
                        $(currentStatus[i]).html("filled");
                        $(currentCols[i]).css("background-color", tempColor);
                    }

                    if (currentShape === 0){
                        for(var i = 0; i < 4; i++){

                            if (currentRotation%2 === 0){
                                previousCols[i] = "#col" + (row-i) + "" + (parseInt(shapes.startX) + _shift);
                                previousStatus[i] = "#status" + (row-i) + "" + (parseInt(shapes.startX) + _shift);
                            }
                            else if (currentRotation%2 === 1){
                                previousCols[i] = "#col" + (row) + "" + (parseInt(shapes.startX) + _shift+i);
                                previousStatus[i] = "#status" + (row) + "" + (parseInt(shapes.startX) + _shift+i);
                            }
                        }
                    }
                    if (currentShape === 1){
                        previousCols[0] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                        previousStatus[0] = "#status" + (row) + "" + (parseInt(startX) + _shift);
        
                        previousCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                        previousStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);
        
                        previousCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift + 1);
                        previousStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift + 1);
        
                        previousCols[3] = "#col" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                        previousStatus[3] = "#status" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                    }
        
                    previous = true;
                }
                else {
                    shift = lastShift;
                }
            }

            else if(shiftEval){
                shiftEval = true; 
                attempt=0;
                lastShift = shift;
                currentRow++;

                for (var i = 0; i < 4; i++){
                    $(currentStatus[i]).html("filled");
                    $(currentCols[i]).css("background-color", tempColor);
                }

                if(currentShape === 0){
                    for(var i = 0; i < 4; i++){
                        if (currentRotation%2 === 0){
                            previousCols[i] = "#col" + (row-i) + "" + (parseInt(shapes.startX) + _shift);
                            previousStatus[i] = "#status" + (row-i) + "" + (parseInt(shapes.startX) + _shift);
                        }
                        else if (currentRotation%2 === 1){
                            previousCols[i] = "#col" + (row) + "" + (parseInt(shapes.startX) + _shift+i);
                            previousStatus[i] = "#status" + (row) + "" + (parseInt(shapes.startX) + _shift+i);
                        }
                    }
                }
                if(currentShape===1){
                    previousCols[0] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                    previousStatus[0] = "#status" + (row) + "" + (parseInt(startX) + _shift);
    
                    previousCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                    previousStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);
    
                    previousCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift + 1);
                    previousStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift + 1);
    
                    previousCols[3] = "#col" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                    previousStatus[3] = "#status" + (row-1) + "" + (parseInt(startX) + _shift + 1);
                }
/* L shape to be added
                if(currentShape===2){
                    previousCols[0] = "#col" + (row-2) + "" + (parseInt(startX) + _shift);
                    previousStatus[0] = "#status" + (row-2) + "" + (parseInt(startX) + _shift);
    
                    previousCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                    previousStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);
    
                    previousCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                    previousStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift);
    
                    previousCols[3] = "#col" + (row) + "" + (parseInt(startX) + _shift + 1);
                    previousStatus[3] = "#status" + (row) + "" + (parseInt(startX) + _shift + 1);
                }

                if(currentShape===3){
                    previousCols[0] = "#col" + (row-2) + "" + (parseInt(startX) + _shift);
                    previousStatus[0] = "#status" + (row-2) + "" + (parseInt(startX) + _shift);
    
                    previousCols[1] = "#col" + (row-1) + "" + (parseInt(startX) + _shift);
                    previousStatus[1] = "#status" + (row-1) + "" + (parseInt(startX) + _shift);
    
                    previousCols[2] = "#col" + (row) + "" + (parseInt(startX) + _shift);
                    previousStatus[2] = "#status" + (row) + "" + (parseInt(startX) + _shift);
    
                    previousCols[3] = "#col" + (row) + "" + (parseInt(startX) + _shift - 1);
                    previousStatus[3] = "#status" + (row) + "" + (parseInt(startX) + _shift - 1);
                }
 */   
                previous = true;
            }
        }

        else if(status === undefined && currentRow > 0 && playing){
                resetLine();
                reset();
        }

        else if(status === "filled" && playing && squareStatus === "filled"){
                 
            if(attempt === 1){

                console.log(currentRow);
                if(currentRow > 0){
                    resetLine();
                    reset();
                }
                else playing = false;
            }

            else if(attempt === 0 && shift !== lastShift){
                shiftEval = true; 
                shift = lastShift;
            }

            else if(attempt === 0 && shift === lastShift && currentRow > 0) {
                //console.log("reset");
                resetLine();
                reset(); 
            }
            else {
                playing = false;
                console.log("game over");
                clearInterval(interval);
            }
        }
        else{
            if (shift !== lastShift)
                shift = lastShift;
            else {
                resetLine();
                reset();
            }
        }     
    }

    init();

    $(".container").html(grid);

    $(".col").click(run);

    $("html").keydown(function(event){
        if (event.which === 37 && playing && shiftEval && eventLeft){
            if(shift + 4> 0){
                lastShift = shift;
                shift--;
                shiftEval = false;
            }
            else{}
        }

        if (event.which === 39 && playing && shiftEval && eventRight){
            if(shift + 4 + shapes.rotation[currentRotation][currentShape]< 8){
                lastShift = shift;
                shift++;
                shiftEval = false;
            }
            else{}
        }
    });

    $("html").keyup(function(event){
        if ((event.which === 114 || event.which === 82)&&rotationChecked){
            rotationChecked = false;
            console.log("PRESSED R");
            previousRotation = currentRotation;
            if(currentRotation < 2) {
                currentRotation++;
            }
            else {
                currentRotation = 0;
            }
        }
    });
})