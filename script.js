
const displayRes = document.querySelector(".display-res");
const prevRes = document.getElementById("prev-res");

const AC = document.querySelector("#ac");

function display( val){
    const newVal = displayRes.value + val;

    if( newVal.length > 12){
        alert("Too many Inputs!");
        return;
    }
    displayRes.value = newVal;
}

AC.addEventListener("click", () => {
    displayRes.value = "";
    prevRes.value = "";
});

function solve(){
    let eqn = displayRes.value;
    prevRes.value = eqn;

    let ans = eval(eqn);
    displayRes.value = ans;
}

function backspace(){
    const inp = displayRes.value;
    if( inp.length < 0 ){
        return;
    }
    displayRes.value = inp.substring(0, inp.length-1);
}