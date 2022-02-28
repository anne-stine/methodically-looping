//#region --- Methodically Looping


// 1. Find a piece of text and check if it is above a specified wordcount (signs).

let text = "Lorem ipsum, dolor if amet consectetur adipisicing and. Voluptates molestias as animi nulla architecto voluptatibus reprehenderit and tempore dolores quidem."

// console.log(text.length > 500)

// 2. Make a loop that counts to 10.

for (let i = 1; i < 11; i++) {
    // console.log(i)
}

// 3. Find the words "if". "as" and "and" in your text and remove these words, plus 5 signs on each side of the words.

// Find an instance of "if", as well as 5 letters before and after instance.

let instanceIf = text.indexOf("if")
if (instanceIf -5 < 0) {
    startIf = 0
}
else {
    startIf = instanceIf -5
}
endIf = instanceIf +5
ifText = text.slice(startIf, endIf)
// console.log(ifText)

// Find an instance of "as", as well as 5 letters before and after instance.

let instanceAs = text.indexOf("as")
if (instanceAs -5 < 0) {
    startAs = 0
}
else {
    startAs = instanceAs -5
}
endAs = instanceAs +5
asText = text.slice(startAs, endAs)
// console.log(asText)

// Find an instance of "and", as well as 5 letters before and after instance.

let instanceAnd = text.indexOf("and")
if (instanceAnd -5 < 0) {
    startAnd = 0
}
else {
    startAnd = instanceAnd -5
}
endAnd = instanceAnd +5
andText = text.slice(startAnd, endAnd)
// console.log(andText)

// 4. Merge your new strings.

mergedString = ifText.concat(asText, andText)
// console.log(mergedString)

// 5. Replace those words with Norwegian words.
// console.log(text.replace("old word", "new word"))

// console.log(text.replace("if", "HVIS"))
// console.log(text.replace("as", "SOM"))
// console.log(text.replace("and", "OG"))

// 6. Create a little game where the player has 3 lives. Hint: while loops.



// 7. Make an array with 10 words and one with 10 numbers.

let wordsArray = ["word1", "word2", "word3", "word4", "word5", "word6", "word7", "word8", "word9", "word10"]
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 8. Make all the numbers the same, except the first and last numbers, one number at a time.

indexNumber = 1
for (indexNumber; 
    (indexNumber+1) < numbersArray.length; 
    indexNumber++)
{  
    if (indexNumber == numbersArray)
    {
        break
    }
    else
    {
        numbersArray.fill(13, indexNumber, indexNumber+1)
    }
    // console.log(numbersArray)
}

//#endregion