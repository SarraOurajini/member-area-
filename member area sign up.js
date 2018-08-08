
var n=false;
var ps=false;
var m=false;
var pw=false;
var pwc=false;

function fname() {
    let name= document.getElementById("full-name");
    if (name.value=="") {
        document.getElementById("msg").innerHTML="Please enter your full name";
        name.style.borderColor="red";
    
    }
    else if (name.value!=="" && (name.value.length<6 || name.value.length>20)) {
        document.getElementById("msg").innerHTML="min 6 and max 20 characters";
        name.style.borderColor="red";
    
    }
    else if (name.value!=="" && 6<=name.value.length<=20 ) {
        document.getElementById("msg").innerHTML="";
        name.style.borderColor="black";
        n=true;
    }
 
}

function psd() {
    let psed=document.getElementById("pseud");
    if (psed.value=="") {
        document.getElementById("msgg").innerHTML="Please enter your pseudo";
        psed.style.borderColor="red";  
    
    }
    else if (psed.value!=="" && (psed.value.search(/[a-zA-Z]/) == -1 || psed.value.search(/[0-9]/)==-1)) {
        document.getElementById("msgg").innerHTML="must contain numbers & alphabets";
        psed.style.borderColor="red";
    }
    else if (psed.value!=="" && (psed.value.search(/[a-zA-Z]/) !== -1 && psed.value.search(/[0-9]/) !==-1)) {
        document.getElementById("msgg").innerHTML="";
        psed.style.borderColor="black";
        ps=true;
    }
}

function mail() {
    let valmail=document.getElementById("maill");
    if (valmail.value=="") {
        document.getElementById("msggg").innerHTML="Please enter your email address";
        valmail.style.borderColor="red"; 
    }
    else if  (valmail.value!=="" && (valmail.value.search(/@/) == -1 || valmail.value.search(/[.]/) == -1)) {
        document.getElementById("msggg").innerHTML="Please enter a valid address email";
        valmail.style.borderColor="red";
    }
    else if (valmail.value!=="" && valmail.value.search(/@/) !== -1  && valmail.value.search(/[.]/) !== -1) {
        document.getElementById("msggg").innerHTML="";
        valmail.style.borderColor="black";
        m=true;
    }
}

function pass() {
    let passw=document.getElementById("pasw");
    if (passw.value=="") {
        document.getElementById("msgggg").innerHTML="Please enter a password";
        passw.style.borderColor="red";   
    }
    else if (passw.value!=="" && (passw.value.search(/[a-z]/)==-1 || passw.value.search(/[A-Z]/)==-1 || passw.value.search(/[0-9]/)==-1 || passw.value.length<6 || passw.value.search(/[!@#$%^&*(),.?":{}|<>]/)==-1 )) {
        document.getElementById("msgggg").innerHTML="min 6 char,uppercase,number,special char";
        passw.style.borderColor="red";
    }
    else if (passw.value!=="" && passw.value.search(/[a-z]/)!==-1 && passw.value.search(/[A-Z]/)!==-1 && passw.value.search(/[0-9]/)!==-1 && passw.value.length>=6 && passw.value.search(/[!@#$%^&*(),.?":{}|<>]/)!==-1 ) {
        document.getElementById("msgggg").innerHTML="";
        passw.style.borderColor="black";
        pw=true;
    }
}

function passconf() {
    let passwconf=document.getElementById("paswconf");
    if (passwconf.value=="") {
        document.getElementById("msggggg").innerHTML="Please reenter your password";
        passw.style.borderColor="red";   
    }
    else if (passwconf.value!=="" && passwconf.value!==document.getElementById("pasw").value) {
        document.getElementById("msggggg").innerHTML="password incorrect";
        passwconf.style.borderColor="red";
    }
    else if (passwconf.value!=="" && passwconf.value===document.getElementById("pasw").value) {
    document.getElementById("msggggg").innerHTML="";
    passwconf.style.borderColor="black";
    pwc=true;
    }
}

function valid() { 
    if (n==false || ps==false || m==false|| pw==false || pwc==false) {
        alert("Please fill in all fields");
    }
}