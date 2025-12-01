`
for those interested in the 'history' of this app
(still forthcoming), wrote this up in a couple 
of minutes to survey the differences between latin 
and english in terms of the incidence of their 
shared alphabet...
`

function countLetters (inputString) {
 var letterObject = {}
 var searchIndex = 0
 var inputSize = inputString.length
 var inputString = inputString.toUpperCase()
 while (inputSize > searchIndex) {
  var currentCharacter = inputString[searchIndex]
  var currentCount = letterObject[currentCharacter] || 0
  letterObject[currentCharacter] = currentCount + 1
  searchIndex = searchIndex + 1
 }
 return letterObject
}

`
wrote this original and very key component in about 10 minutes, a function 
that surely is useful in many other contexts and applications...
`

function findText (parentNode) {
 var textContent = parentNode.textContent
 var contentSize = textContent.length
 var searchIndex = 0
 var nodeChildren = parentNode.children
 var numberChildren = nodeChildren.length
 while (searchIndex < numberChildren) {
  var currentChild = nodeChildren[searchIndex]
  var childContent = currentChild.textContent
  var childSize = childContent.length
  if ((childSize / contentSize) > .5) {
   return findText(currentChild)
  }  
  searchIndex = searchIndex + 1
 }
 return parentNode
}
