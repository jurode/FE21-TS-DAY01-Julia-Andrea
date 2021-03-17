// Day 1 | Classwork | Advanced
// @ts-check
// Create a Restaurant Web Page using the below-provided Typescript concepts. Try to implement all of them in an appropriate place in the App:
//    Define for each variable/array the data type
//    List the array items and make sure that it has a strict data type definition
//    Use some loop for displaying the data into the Page (forEach, For in, or For-of)
//    Define some appropriate value as const
// It is up to you how the front-end part will look like. It will be nice if you provide a well structured and designed Bootstrap page.
// Your task is to incorporate all these features using Typescript in a proper and meaningful place in your App. More dynamic data is always welcome. Feel free to add additional functionalities.
var menuArray = [
    {
        mealTitle: "Gambas Al Ajillo",
        mealImg: "https://www.hola.com/imagenes/cocina/recetas/20191128154911/receta-gambas-al-ajillo/0-750-844/gambas-ajillo-m.jpg",
        mealPrice: 7.90,
        mealDescription: "Gambas",
        mealVeggy: false
    },
    {
        mealTitle: "Tortilla Espa&#241;ola",
        mealImg: "https://www.carolinescooking.com/wp-content/uploads/2015/04/Spanish-tortilla-espanola-photo.jpg",
        mealPrice: 5.30,
        mealDescription: "made from potatoes",
        mealVeggy: true
    },
    {
        mealTitle: "Patatas Bravas",
        mealImg: "https://www.pequerecetas.com/wp-content/uploads/2015/07/Patatas-bravas-Madrid-550x550.jpg",
        mealPrice: 6.30,
        mealDescription: "made from potatoes",
        mealVeggy: true
    },
    {
        mealTitle: "Calamares Fritos",
        mealImg: "https://unareceta.com/wp-content/uploads/2017/04/calamares-a-la-romana-tiernos.jpg",
        mealPrice: 12.70,
        mealDescription: "fresh from Malaga",
        mealVeggy: false
    }, {
        mealTitle: "Gazpacho",
        mealImg: "https://images.lecker.de/,id=1caf3c29,b=lecker,w=610,cg=c.jpg",
        mealPrice: 8.30,
        mealDescription: "cold",
        mealVeggy: true
    },
    {
        mealTitle: "Paella",
        mealImg: "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-i-p/rez-edeka-paella-mit-meeresfruechten-rezept-i-p-1-1.jpg",
        mealPrice: 15.30,
        mealDescription: "with fresh seafood",
        mealVeggy: false
    },
    {
        mealTitle: "Pulpo A La Gallega",
        mealImg: "https://www.dunekacke.de/media/image/6a/f8/b7/pulpo-a-la-gallega-albo.jpg",
        mealPrice: 16.30,
        mealDescription: "with fresh seafood",
        mealVeggy: false
    },
    {
        mealTitle: "Sangria",
        mealImg: "https://www.koch-mit.de/app/uploads/2019/08/sangria.jpg",
        mealPrice: 3.50,
        mealDescription: "with Alcohol",
        mealVeggy: true
    }
];
// print our meals into #output
// make a loop
for (var index in menuArray) {
    var output = document.getElementById("output");
    output.innerHTML += "\n        <div class=\"mealContainer m-1 p-1 border\">\n            <div class=\"mealTitle fs-4 fw-bold text-center mb-1\">" + menuArray[index].mealTitle + "</div>\n            <img class=\"img-thumbnail\" src=\"" + menuArray[index].mealImg + "\">\n            <div class=\"pt-2 text-center\">" + menuArray[index].mealDescription + "</div>\n            <div class=\"fw-bold text-center\">\u20AC " + menuArray[index].mealPrice + "</div>\n        </div>\n    ";
}
// declare a const variable
var contactInformation = "info@restaurant.es";
document.getElementById("footer").innerHTML = "contact: " + contactInformation;
// CODE PARKING LOT
// var divContainer = document.createElement("div");
// divContainer.setAttribute("class","container");
// output.appendChild(divContainer);
// var divTitle = document.createElement("div");
// divTitle.setAttribute("class","mealTitle");
// let innerDivTitle = document.createTextNode(menuArray[i].mealTitle);
// divTitle.appendChild(innerDivTitle);
// function printContact(){
//     const contactInformation : string = "info@restaurant.es";
//     document.getElementById("footer").innerHTML = contactInformation;
// }
// printContact();
