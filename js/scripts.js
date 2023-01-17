window.addEventListener("load", function(event){

    let formEl = document.querySelector("#form");
    formEl.addEventListener("submit", function(e) {
        e.preventDefault();
        if (document.querySelector("ul")) {
            document.querySelector("ul").remove();
        }
        let fav1El = document.querySelector("#fav1").value;
        let fav2El = document.querySelector("#fav2").value;
        let fav3El = document.querySelector("#fav3").value;
        let favThingsArr = [fav1El,fav2El,fav3El];
        let ulArray = document.createElement("ul");
        favThingsArr.forEach((element) => {
            let li = document.createElement("li");
            li.append(element);
            ulArray.append(li);
                })
            formEl.after(ulArray);
        console.log(favThingsArr);
    })
}) 