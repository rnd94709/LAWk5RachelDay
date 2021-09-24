let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")
quoteString = quoteString.toUpperCase()

console.log(`Upper case string is: ${quoteString}`)

let authorString = ("- Henry Ford")

let completeString = quoteString.concat(authorString)
console.log(`Concatenated string is: ${completeString}`)

let found = completeString.includes("Henry")

if (completeString.includes("Henry"))
{
console.log("Henry was in completeString.")
}
else
  {
  console.log("Henry was NOT in completeString")
  }