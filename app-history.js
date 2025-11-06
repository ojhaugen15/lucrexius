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

`
wrote this original and very key component in about 10 minutes, a function 
that surely is useful in many other contexts and applications...
`

function findText (parentNode) {
 textContent = parentNode.textContent
 contentSize = textContent.length
 searchIndex = 0
 nodeChildren = parentNode.children
 numberChildren = nodeChildren.length
 while (searchIndex < numberChildren) {
  currentChild = nodeChildren[searchIndex]
  childContent = currentChild.textContent
  childSize = childContent.length
  if ((childSize / contentSize) > .5) {
   return findText(currentChild)
  }  
  searchIndex = searchIndex + 1
 }
 return parentNode
}
