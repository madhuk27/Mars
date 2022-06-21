function add(e) {
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnumber").value);
    var snum = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("Result").innerHTML = fnum + snum;    
}
function minus(e) {
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnumber").value);
    var snum = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("Result").innerHTML = fnum - snum;
}
function multiply(e) {
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnumber").value);
    var snum = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("Result").innerHTML = fnum * snum;
}
function Division(e) {
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnumber").value);
    var snum = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("Result").innerHTML = fnum / snum;
}
