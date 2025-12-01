`
for those interested in the history of this app, 
wrote this function up in a couple of minutes to survey the 
differences between latin and english in terms of 
the incidence of their shared alphabet...
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
wrote/conceived this original and very key component in about 10 minutes, a function 
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

`
(11/30/25 Los Angeles:) Tonight I submitted my first Chrome Extension
for review to be published through the Chrome Web Store. Anyone that 
examines my GitHub history today will see that I repaired many instances 
of neglecting to instantiate local-scoping with JavaScript! Please do
not allow this to discourage you that have wandered onto my GitHub page
from engaging with my original and innovative work. My excuse for this
blunder - a minor one for my code-writing style - is that I was so bogged 
down with the intricacies of my new PL 'Isp' that I forgot this very 
basic and very easy-to-understand necessity of computer programming. For
those interested, I will share that 'Isp' will handle "local-scoping"
simply by doing this automatically for all altered/created variables
that do not include an underscore character in their name.

And for more of the history of this app, see the previously private repo:
https://github.com/ojhaugen15/lucretius
`
