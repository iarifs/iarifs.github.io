var fStack = document.getElementById("skill");

var skillSet = ["C#", "Oracle SQL", "JavaScript", "ASP.NET", "NoSQL"];

let restart = false;

function setDelay(skill, time) {
    setTimeout(() => {
        fStack.innerText = skill + " developer";
    }, 1000 * time)
}

function mapping (){
    skillSet.map((elem, index) => {
        setDelay(elem, index);

        if (index === skillSet.length - 1) {
            restart = true;
        }
    })
}

mapping();