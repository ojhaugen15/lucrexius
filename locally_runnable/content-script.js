latin_threshhold = .01
find_ratio = .55
conversion_happened = false
backup_url = "https://ojhaugen15.github.io/lucrexius"

// Commented out code, just below, needed for Chrome:
/*
chrome.runtime.onMessage.addListener(messageReceived)

function messageReceived (request, sender, sendResponse) {
 if (areSame(getValue(request, 'message'), "icon_clicked")) {
*/
  rectifyText()
/*
 }
}
*/

open_confirmation = "You clicked the lucreXius icon. Unfortunately, version 1 of lucreXius was unable to find the latin on this page programmatically. Would you like to open a new tab to convert your latin manually?"

function findText (parentNode) {
 var textContent = getValue(parentNode, 'textContent')
 var contentSize = getValue(textContent, 'length')
 var searchIndex = 0
 var nodeChildren = getValue(parentNode, 'children')
 var numberChildren = getValue(nodeChildren, 'length')
 while (firstGreater(numberChildren, searchIndex)) {
  var currentChild = getValue(nodeChildren, searchIndex)
  var childContent = getValue(currentChild, 'textContent')
  var childSize = getValue(childContent, 'length')
  if (firstGreater(quotientNumbers(childSize, contentSize), find_ratio)) {
   return findText(currentChild)
  }  
  searchIndex = addNumbers(searchIndex, 1)
 }
 return parentNode
}

function isLatin (inputString) {
 var letterObject = {}
 var searchIndex = 0
 var inputSize = getValue(inputString, 'length')
 while (firstGreater(inputSize, searchIndex)) {
  var currentCharacter = getValue(inputString, searchIndex)
  var capitalizedCurrent = capitalizeCharacter(currentCharacter)
  var currentCount = getValue(letterObject, capitalizedCurrent)
  currentCount = zeroUndefined(currentCount)
  setValue(letterObject, capitalizedCurrent, addNumbers(currentCount, 1))
  searchIndex = addNumbers(searchIndex, 1)
 }
 var uncommonLetters = 0
 uncommonLetters = addNumbers(uncommonLetters, zeroUndefined(getValue(letterObject, 'J')))
 uncommonLetters = addNumbers(uncommonLetters, zeroUndefined(getValue(letterObject, 'K')))
 uncommonLetters = addNumbers(uncommonLetters, zeroUndefined(getValue(letterObject, 'W')))
 uncommonLetters = addNumbers(uncommonLetters, zeroUndefined(getValue(letterObject, 'Y')))
 uncommonLetters = addNumbers(uncommonLetters, zeroUndefined(getValue(letterObject, 'Z')))
 var latinIndex = quotientNumbers(uncommonLetters, inputSize)
 return firstGreater(latin_threshhold, latinIndex)
}

function biggestProperty (elementChildren, childProperty) {
 var spacePrefix = 'bp'
 var numberChildren = getValue(elementChildren, 'length')
 var searchIndex = 0
 var biggestCount = 0
 var biggestName = ''
 while (firstGreater(numberChildren, searchIndex)) {
  var currentElement = getValue(elementChildren, searchIndex)
  var currentSize = getValue(getValue(currentElement, 'textContent'), 'length')
  var currentProperty = getValue(currentElement, childProperty)
  var currentWindow = concatenateStrings(spacePrefix, currentProperty)
  setSpace(spacePrefix, currentProperty)
  var currentCount = addNumbers(zeroUndefined(getWindow(currentWindow)), currentSize)
  setWindow(currentWindow, currentCount)
  if (firstGreater(currentCount, biggestCount)) {
   biggestName = currentProperty
   biggestCount = currentCount
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 clearSpace(spacePrefix)
 return biggestName
}

function sendHelp () {
 setTimeout(function () {
  if (areSame(conversion_happened, false)) {
   var helpNeeded = confirm(open_confirmation)
   if (areSame(helpNeeded, true)) {
    conversion_happened = true
    open(backup_url)
   }
  }
 }, 3000)
}

function rectifyText () {
 sendHelp()
 var textElement = findText(getValue(document, 'body'))
 console.log('textElement: ', textElement)
 if (areSame(textElement, getValue(document, 'body'))) {
  var bodyChildren = getValue(textElement, 'children')
  var containerClass = biggestProperty(bodyChildren, 'className')
  var numberChildren = getValue(bodyChildren, 'length')
  var searchIndex = 0
  while (firstGreater(numberChildren, searchIndex)) {
   var currentChild = getValue(bodyChildren, searchIndex)
   var currentClass = getValue(currentChild, 'className')
   if (areSame(containerClass, currentClass)) {
    var currentText = getValue(currentChild, 'textContent')
    if (isLatin(currentText)) {
     var rectifiedText = convertText(currentText)
     conversion_happened = true
     if (isNumbered(currentChild)) {
      rectifiedText = injectNumber(currentChild, rectifiedText)
     }
     setValue(currentChild, 'innerHTML', rectifiedText)
    }
   }
   searchIndex = addNumbers(searchIndex, 1)
  }
  return
 }
 var ancientText = getValue(textElement, 'textContent')
 if (isLatin(ancientText)) {
  var rectifiedText = convertText(ancientText)
  conversion_happened = true
  setValue(textElement, 'innerHTML', rectifiedText)
 }
}

function isNumbered (inputElement) {
 var firstChild = getValue(getValue(inputElement, 'children'), 0)
 if (arentSame(firstChild, undefined)) {
  if (areSame(getValue(firstChild, 'tagName'), 'A')) {
   return true
  }
 } 
 return false
}

function injectNumber (inputElement, innerText) {
 var elementNumber = getValue(getValue(getValue(inputElement, 'children'), 0), 'name')
 var textPrefix = concatenateStrings('<a name="', concatenateStrings(elementNumber, '"></a>'))
 return concatenateStrings(textPrefix, innerText)
}

function capitalizeCharacter (inputCharacter) {
 if (areSame(inputCharacter, 'a')) {
  return 'A'
 }
 if (areSame(inputCharacter, 'b')) {
  return 'B'
 }
 if (areSame(inputCharacter, 'c')) {
  return 'C'
 }
 if (areSame(inputCharacter, 'd')) {
  return 'D'
 }
 if (areSame(inputCharacter, 'e')) {
  return 'E'
 }
 if (areSame(inputCharacter, 'f')) {
  return 'F'
 }
 if (areSame(inputCharacter, 'g')) {
  return 'G'
 }
 if (areSame(inputCharacter, 'h')) {
  return 'H'
 }
 if (areSame(inputCharacter, 'i')) {
  return 'I'
 }
 if (areSame(inputCharacter, 'j')) {
  return 'J'
 }
 if (areSame(inputCharacter, 'k')) {
  return 'K'
 }
 if (areSame(inputCharacter, 'l')) {
  return 'L'
 }
 if (areSame(inputCharacter, 'm')) {
  return 'M'
 }
 if (areSame(inputCharacter, 'n')) {
  return 'N'
 }
 if (areSame(inputCharacter, 'o')) {
  return 'O'
 }
 if (areSame(inputCharacter, 'p')) {
  return 'P'
 }
  if (areSame(inputCharacter, 'q')) {
  return 'Q'
 }
 if (areSame(inputCharacter, 'r')) {
  return 'R'
 }
 if (areSame(inputCharacter, 's')) {
  return 'S'
 }
 if (areSame(inputCharacter, 't')) {
  return 'T'
 }
 if (areSame(inputCharacter, 'u')) {
  return 'U'
 }
 if (areSame(inputCharacter, 'v')) {
  return 'V'
 }
 if (areSame(inputCharacter, 'w')) {
  return 'W'
 }
 if (areSame(inputCharacter, 'x')) {
  return 'X'
 }
 if (areSame(inputCharacter, 'y')) {
  return 'Y'
 }
 if (areSame(inputCharacter, 'z')) {
  return 'Z'
 }
 return inputCharacter
}

function convertText (inputString, currentOutput, currentIndex) {
 var searchIndex = 0
 var stringSize = getValue(inputString, 'length')
 var outputHTML = ''
 var currentLine = ''
 if (arentSame(currentOutput, undefined)) {
  var searchIndex = currentIndex
  var outputHTML = currentOutput
 }
 while (firstGreater(stringSize, searchIndex)) {
  var currentCharacter = getValue(inputString, searchIndex)
  if (isPunctuation(currentCharacter)) {
   currentOutput = concatenateStrings(outputHTML, addDividers(currentLine))
   currentIndex = addNumbers(searchIndex, 1)
   return convertText(inputString, currentOutput, currentIndex)
  }
  if (legalCharacter(currentCharacter)) {
   currentLine = concatenateStrings(currentLine, convertLetter(currentCharacter))
  }
  searchIndex = addNumbers(searchIndex, 1)
 }
 outputHTML = concatenateStrings(outputHTML, addDividers(currentLine))
 return outputHTML
}

function isPunctuation (currentCharacter) {
 if (areSame(currentCharacter, ':')) {
  return true
 }
 if (areSame(currentCharacter, ';')) {
  return true
 }
 if (areSame(currentCharacter, '.')) {
  return true
 }
 if (areSame(currentCharacter, ',')) {
  return true
 }
 if (areSame(currentCharacter, '?')) {
  return true
 }
 if (areSame(currentCharacter, '–')) {
  return true
 }
 if (areSame(currentCharacter, '"')) {
  return true
 }
}

function addDividers (inputString) {
 return concatenateStrings(concatenateStrings('<div>', inputString), '</div>')
}

function isNumber (inputCharacter) {
 if (areSame(inputCharacter, '0')) {
  return true
 }
 if (areSame(inputCharacter, '1')) {
  return true
 }
 if (areSame(inputCharacter, '2')) {
  return true
 }
 if (areSame(inputCharacter, '3')) {
  return true
 }
 if (areSame(inputCharacter, '4')) {
  return true
 }
 if (areSame(inputCharacter, '5')) {
  return true
 }
 if (areSame(inputCharacter, '6')) {
  return true
 }
 if (areSame(inputCharacter, '7')) {
  return true
 }
 if (areSame(inputCharacter, '8')) {
  return true
 }
 if (areSame(inputCharacter, '9')) {
  return true
 }
 return false
}

function legalCharacter (inputCharacter) {
 if (areSame(true, isNumber(inputCharacter))) {
  return false
 }
 if (areSame(inputCharacter, ' ')) {
  return false
 }
 if (areSame(inputCharacter, '\n')) {
  return false
 }
 if (areSame(inputCharacter, '[')) {
  return false
 }
 if (areSame(inputCharacter, ']')) {
  return false
 }
 if (areSame(inputCharacter, '&nbsp;')) {
  return false
 }
 var characterCode = inputCharacter.charCodeAt()
 if (areSame(characterCode, 160)) {
  return false
 }
 return true
}

function convertLetter (inputString) {
 if (areSame(inputString, ' ')) {
  return ''
 }
 if (areSame(inputString, 'U')) {
  return 'V'
 }
 if (areSame(inputString, 'J')) {
  return 'I'
 }
 if (areSame(inputString, 'a')) {
  return 'A'
 }
 if (areSame(inputString, 'b')) {
  return 'B'
 }
 if (areSame(inputString, 'c')) {
  return 'C'
 }
 if (areSame(inputString, 'd')) {
  return 'D'
 }
 if (areSame(inputString, 'e')) {
  return 'E'
 }
 if (areSame(inputString, 'f')) {
  return 'F'
 }
 if (areSame(inputString, 'g')) {
  return 'G'
 }
 if (areSame(inputString, 'h')) {
  return 'H'
 }
 if (areSame(inputString, 'i')) {
  return 'I'
 }
 if (areSame(inputString, 'j')) {
  return 'I'
 }
 if (areSame(inputString, 'k')) {
  return 'K'
 }
 if (areSame(inputString, 'l')) {
  return 'L'
 }
 if (areSame(inputString, 'm')) {
  return 'M'
 }
 if (areSame(inputString, 'n')) {
  return 'N'
 }
 if (areSame(inputString, 'o')) {
  return 'O'
 }
 if (areSame(inputString, 'p')) {
  return 'P'
 }
 if (areSame(inputString, 'q')) {
  return 'Q'
 }
 if (areSame(inputString, 'r')) {
  return 'R'
 }
 if (areSame(inputString, 's')) {
  return 'S'
 }
 if (areSame(inputString, 't')) {
  return 'T'
 }
 if (areSame(inputString, 'u')) {
  return 'V'
 }
 if (areSame(inputString, 'v')) {
  return 'V'
 }
 if (areSame(inputString, 'w')) {
  return 'W'
 }
 if (areSame(inputString, 'x')) {
  return 'X'
 }
 if (areSame(inputString, 'y')) {
  return 'Y'
 }
 if (areSame(inputString, 'z')) {
  return 'Z'
 }
 return inputString
}

function zeroUndefined (inputValue) {
 if (areSame(inputValue, undefined)) {
  return 0
 }
 return inputValue
}

function setWindow (variableKey, variableValue) {
 window[variableKey] = variableValue
}

function getWindow (variableKey) {
 return window[variableKey]
}

function clearSpace (spacePrefix) {
 var currentNumber = 1
 var currentSpot = concatenateStrings(spacePrefix, currentNumber)
 var currentKey = getWindow(currentSpot)
 while (arentSame(currentKey, undefined)) {
  setWindow(currentSpot, undefined)
  currentSpot = concatenateStrings(spacePrefix, addNumbers(currentNumber, 1))
  currentKey = getWindow(currentSpot)
  setWindow(concatenateStrings(spacePrefix, currentKey), undefined)
 }
}

function setSpace (spacePrefix, variableKey) {
 var currentNumber = 1
 var currentSpot = concatenateStrings(spacePrefix, currentNumber)
 var currentKey = getWindow(currentSpot)
 while (arentSame(currentKey, undefined)) {
  if (areSame(currentKey, variableKey)) {
   return
  }
  currentNumber = addNumbers(currentNumber, 1)
  currentSpot = concatenateStrings(spacePrefix, currentNumber)
  currentKey = getWindow(currentSpot)
 }
 setWindow(currentSpot, variableKey)
}

//
function getValue (inputObject, keyName) {
 return inputObject[keyName]
}

function areSame (item1, item2) {
 return item1 === item2
}

function arentSame (item1, item2) {
 return item1 !== item2
}

function setValue (inputObject, keyName, valueValue) {
 inputObject[keyName] = valueValue
}

function firstGreater (number1, number2) {
 return number1 > number2
}

function concatenateStrings (string1, string2) {
 return string1 + string2
}

function multiplyNumbers (number1, number2) {
 return number1 * number2
}

function addNumbers (number1, number2) {
 return number1 + number2
}

function quotientNumbers (number1, number2) {
 return number1 / number2
}
