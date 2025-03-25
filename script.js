// 1. Show an alert box on click on a link. 
document.addEventListener("DOMContentLoaded", function () {
    const alertLink = document.getElementById("alert-link");

    alertLink.addEventListener("click", function (event) {
        event.preventDefault(); // Correct spelling
        alert("Hello! You clicked the link.");
    });
});

// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.

document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".mobile-pics");

    images.forEach(function(image){
        image.addEventListener("click", function(){
            alert("you clicked on " + image.alt);
        });
    });
});

// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.  

document.addEventListener("DOMContentLoaded", function(){
   let students = [
    { id:1, name: "john doe", age: 20},
    { id:2, name: "hina", age: 20},
    { id:3, name: "najma", age: 22},
    { id:4, name: "maham", age: 24},
    { id:5, name: "elizbth", age: 19},
    { id:6, name: " kashif", age: 33},
    { id:7, name: "nish", age: 22},
    { id:8, name: "eman", age: 22},
    { id:9, name: "joliee", age: 20},
    { id:10, name: "doeman", age: 20}
   ];

   let tablebody = document.querySelector("#studentTable tbody");
   
   students.forEach(student => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td><button onclick = "deleteRow(this)">Delete</button></td>
`;
  tablebody.appendChild(row);

   });
});
   
   function deleteRow(button){
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
   }


//    4. Display an image in browser. Change the picture on mouseover and set the 
//    first picture on mouseout.   

function changeimage(){
    document.getElementById("imgechanger").src ="./images2/pic2.png"

}

function resetimage(){
    document.getElementById("imgechanger").src ="./images2/pic3.jpg";
}

// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser. 

let countervalue =0;

const counter = document.getElementById("counter")
const increasebtn = document.getElementById("increase-btn");
const decreasebtn = document.getElementById("decrease-btn");


function updatecounter(){
    counter.textContent = countervalue;

}

increasebtn.addEventListener("click", function(){
    countervalue++;
    updatecounter();

})

decreasebtn.addEventListener("click", function(){
    countervalue--;
    updatecounter();

});