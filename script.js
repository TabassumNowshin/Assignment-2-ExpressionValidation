// get fields
let email = document.querySelector("#email"),
fon = document.querySelector("#fon"),
pstcode = document.querySelector("#pstcode");

//event listner
email.addEventListener("click", chkmail);
fon.addEventListener("click", chkfon);
pstcode.addEventListener("click", chkpstcode);

function chkmail() {
    chkEx("Email");
}

function chkfon() {
    chkEx("Phone Number");
}

function chkpstcode() {
    chkEx("Post Code");
}

function chkEx(key) {
    let inp = prompt("Enter Input");
    if(inp === ""){
        alert("Please Enter an Expression");
    } else {
        switch(key) {
            case "Email":
                re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
                break;
            case "Phone Number":
                re = /^(\+)?(88)?01[0-9]{9}$/;
                break;
            case "Post Code":
                re = /^[0-9]{4}$/;
                break;
        }
        
        if(re.test(inp)) {
            alert(`Valid ${key}!`);
        } else {
            alert(`Invalid ${key}!`);
        }
    }    
}