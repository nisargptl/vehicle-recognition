 var sliderLeft=document.getElementById("slider0to50");
 var sliderRight=document.getElementById("slider51to100");
 var inputMin=document.getElementById("min");
 var inputMax=document.getElementById("max");

///value updation from input to slider
//function input update to slider
function sliderLeftInput(){//input udate slider left
    sliderLeft.value=inputMin.value;
}
function sliderRightInput(){//input update slider right
    sliderRight.value=(inputMax.value);//chnage in input max updated in slider right
}

//calling function on change of inputs to update in slider
inputMin.addEventListener("change",sliderLeftInput);
inputMax.addEventListener("change",sliderRightInput);


///value updation from slider to input
//functions to update from slider to inputs 
function inputMinSliderLeft(){//slider update inputs
    inputMin.value=sliderLeft.value;
}
function inputMaxSliderRight(){//slider update inputs
    inputMax.value=sliderRight.value;
}
sliderLeft.addEventListener("change",inputMinSliderLeft);
sliderRight.addEventListener("change",inputMaxSliderRight);
