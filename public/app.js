function Degistir(id1,id2){
    var abs=document.getElementById(id1).innerHTML;
    var ovr=document.getElementById(id2).innerHTML;
    document.getElementById(id1).innerHTML=ovr;
    // document.getElementById(id2).style.display="none";

}
function ResimGoster(id1){
    document.getElementById(id1).style.display="inherit";
}
function ResimGizle(id1){
    document.getElementById(id1).style.display="none";
}