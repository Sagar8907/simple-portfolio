let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    let email = document.getElementById("email")
    let mnuum = document.getElementById("nuum")
    if(email.value == "" && mnuum.value == ""){
        alert("Fill Detail")
    }else{
        alert("Logged IN")
    }
})
let bar = document.getElementById("bar");
let ul = document.querySelector("ul");
bar.addEventListener("click",()=>{
    ul.classList.toggle("showData");

    if(ul.className =="showData"){
        bar.className="fa-solid fa-xmark"
    }else{
        bar.className = "fa-solid fa-bars"
    }
})
