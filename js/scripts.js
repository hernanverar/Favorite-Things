window.addEventListener("load", function(event){
    let checkBoxForm = document.querySelector("#checkboxes");
    let formEl = document.querySelector("#form");
    let box1Form = document.querySelector("#box1");
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
    checkBoxForm.addEventListener("submit", function(e){
        e.preventDefault();

        const heading = document.createElement("h2");
            heading.append("Here are the results.");
            document.body.append(heading);

        let collectArray = document.querySelectorAll("input[name=stufftoputcatson]:checked");
        console.log(collectArray);
        let theDiv = document.createElement("div");
        collectArray.forEach(function(stuff) {
            theDiv.append(stuff.value);
            theDiv.append(" and ");
        })        
        heading.after(theDiv);
    })

    box1Form.addEventListener("submit", function(event){ 
        event.preventDefault();

        const fruits = document.querySelectorAll("input[name=groceries]:checked");
        let fruitsArr = [];
        fruits.forEach((element) => {
            fruitsArr.push(element.value);
        })
        let fruitsArrSorted = fruitsArr.sort();
        console.log(fruitsArrSorted);

        let fruitEl = document.createElement("fruits");
        fruitsArrSorted.forEach(function(stuff) {
            console.log(stuff)
            fruitEl.append(stuff.toUpperCase());
            fruitEl.append(document.createElement('br'));
            
        });
        document.body.append(fruitEl);
    });
}) 