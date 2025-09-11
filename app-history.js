`
for those interested in the 'history' of this app
(still forthcoming), wrote this up in a couple 
of minutes to survey the differences between latin 
and english in terms of the incidence of their 
shared alphabet...
`

function countLetters (inputString) {
 letterObject = {}
 searchIndex = 0
 inputSize = inputString.length
 inputString = inputString.toUpperCase()
 while (inputSize > searchIndex) {
  currentCharacter = inputString[searchIndex]
  currentCount = letterObject[currentCharacter] || 0
  letterObject[currentCharacter] = currentCount + 1
  searchIndex = searchIndex + 1
 }
 return letterObject
}
