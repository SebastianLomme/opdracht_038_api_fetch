const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve("is groter dan 10")
        } else reject("is niet groter dan 10")}
)}

testNum(9)
.then(res => console.log(res))
.catch(err => console.log(err))

const makeAllCaps = (words) => {
    return new Promise((resolve, reject ) => {
        if  (words.every(word => {
            return typeof word === "string"
        })
    ) {
        resolve(sortWords(
            words.map(word => {
                return word.toUpperCase()
            })
        )
    )
    } else {
        reject("Not a string!")
    }
    })
}


const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort())} else {
                reject("strings only")
            }
    })

}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

makeAllCaps(arrayOfWords)
.then(sortWords(arrayOfWords))
.then(res => console.log(res))
.catch(err => console.log(err))



const complicatedArray = ['cucumber', 44, true];

makeAllCaps(complicatedArray)
.then(sortWords(complicatedArray))
.then(res => console.log(res))
.catch(err => console.log(err))
