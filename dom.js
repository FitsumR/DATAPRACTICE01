// Get a reference to the populate database button in the DOM
const populateButton = document.querySelector("#populateDatabase")

/*
    When the user clicks the button, populate the database with
    Little Debbie snack cakes
*/
populateButton.addEventListener("click", function () {
    const Lashagna = createLasagnaRecipe("Olive", "beef", "onion", "pepper", 
    "garlic", "tomato")
    populateDB(Lasagna)

})