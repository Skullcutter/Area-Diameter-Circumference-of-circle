function Calculate(){
    var radius=Number(document.getElementById("txtRadius").value);
    var result= 3.14*radius*radius;
    document.getElementById('txtResult').value=Math.round(result);
}
