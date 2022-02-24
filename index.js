//#region --- Methodically Looping


// 1. Find a piece of text and check if it is above a specified wordcount (signs).
let text = "Lorem ipsum, dolor if amet consectetur adipisicing and. Voluptates molestias as animi nulla architecto voluptatibus reprehenderit and tempore dolores quidem."

// console.log(text.length > 500)


// 2. Make a loop that counts to 10.
// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }


// 3. Find the words "if". "as" and "and" in your text and remove these words, plus 5 signs on each side of the words.
// do while (text.includes("if")) {
//     text.slice(-5, 10)
//     console.log(text)
// }

let indexOfAnd = text.indexOf("and")
let newText = " "

for (let i = indexOfAnd - 5; i < indexOfAnd + 6; i++) {
    newText += text.substring(i)
    console.log(newText)
}

console.log(newText)


// 4. Merge your new strings.


// 5. Replace those words with Norwegian words.
// console.log(text.replace("old word", "new word"))

// 6. Create a little game where the player has 3 lives. Hind: while loops.


// 7. Make an array with 10 words and one with 10 numbers.


// 8. Make all the numbers the same, except the first and last numbers, one number at a time.


//#endregion