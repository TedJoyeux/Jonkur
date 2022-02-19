let input='';
function kudomako(btn){
    input = input + btn.value;
    document.getElementById('output').innerHTML = input;
}

function bingana(){
    document.getElementById('output').innerHTML = 
    eval(input);
}
function Reset(btn){
    document.getElementById('output').innerHTML = '0';
    input='';
}
function ihanagura(btn){
    input = input.replace(input.slice(-1),'');
    document.getElementById('output').innerHTML = input;
}