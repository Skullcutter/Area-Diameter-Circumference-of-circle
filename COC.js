function PI(){
    return 3.14;
}

function Calculate(){
    var Radius=Number(document.getElementById('txtRadius').value);
    var result=2*PI()*Radius;
    document.getElementById('txtResult').value=Math.round(result);
}
