"use strict"

// let formElem = document.querySelector("form")

// formElem.addEventListener("submit",function(e){
//     e.preventDefault();

//     if(document.getElementById("exampleInputEmail1").value != ""){
//         document.querySelector("span").classList.add("d-none")
//         writeWord(document.getElementById("exampleInputEmail1").value)
//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }
// })

// function writeWord(word){
//     document.querySelector("h1").innerText = word;
// }




// document.querySelector("a").addEventListener("click",function(e){
//     console.log(("clicked a"));
//     e.preventDefault();
// })







// dragElem.ondrag = () => {

// }

// dragElem.ondragend = () => {

// }

// let dragElems = document.querySelectorAll(".item")
// let dropElem = document.getElementById("drop-elem")

//drag-drop

// dragElems.forEach(element => {
//     element.ondragstart = (e) => {
//         e.dataTransfer.setData("id",element.getAttribute("id"))
//     }
// });


// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => dropElem.append(document.getElementById(e.dataTransfer.getData("id")))





//Alternative way for drop-down

// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dragElems.forEach(element => {
//     element.addEventListener("dragstart",function(){
//         dropElem.ondrop = () =>{
//             dropElem.append(element)
//         }
//     })
// });





//file upload




let uploadArea = document.querySelector(".upload-area")

let uploadIcon = document.querySelector("i")

let table = document.querySelector(".table")

uploadArea.ondragover = (e) => {
    e.preventDefault();
}



uploadArea.addEventListener("dragover",function(e){
    e.preventDefault();
})
uploadArea.addEventListener("drop",function(e){
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        let reader = new FileReader()

        reader.onloadend = (event) => {
            let fileBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row"${file.name}</th>
            <td>${file.size / 1024} Kb</td>
            <td>
            <div class="img">
            <img src="${fileBase64}"alt="">
            </div>
            </td>
            </tr>`

            table.classList.remove("d-none")
        }
        reader.readAsDataURL(file)
    }
})





uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})

uploadIcon.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader()

        reader.onloadend = (event) => {
            let fileBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row"${file.name}</th>
            <td>${file.size / 1024} Kb</td>
            <td>
            <div class="img">
            <img src="${fileBase64}"alt="">
            </div>
            </td>
            </tr>`

            table.classList.remove("d-none")
        }
        reader.readAsDataURL(file)
    }
})
