/*
    Single Responsibility Principle
    Two functions:
        1. Factory function for creating snack cakes
        2. Function for saving collection of cackes to localStorage
*/
const keyCriticalPointsByWeekFourofNSS = [
    "Proper variable naming",
    "Data structures",
    "Objects, keys, values",
    "Functions and their purpose",
    "Function arguments and how to use them",
    "Event listeners - Responding to user interaction in the browser"
]

/*
    Purpose: Creates a single snack cakes
    Arguments: title (string), description (string), amount (integer),
               topping (string), flavor (string), weight (integer [grams])
    Returns: Object representing a snack cake.
*/

const createLasagnaRecipe = (Olive, beef, onion, pepper, garlic,tomato)=>{
    const Lashagna ={ 
       olive: Olive,
       beef: ground,
       onion: diced,
       pepper: diced,
       garlic: minced,
       tomato: sauce

    } 
    

return Lasagna
}


function populateDB(LasagnaRecipe) {
    const stringified = JSON.stringify(LasagnaRecipe)
    localStorage.setItem("Lasagna", stringified)
}