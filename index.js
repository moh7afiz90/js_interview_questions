// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  const strArr = str.split('')
  strArr.reverse()
  return strArr.join('')

  /////////////////////////////////
  return str.split('').reverse().join('')
  // split string into an array
  // reverse the array index
  // to join the array index

  /////////////////////////////////
  let revString = '';
  for(let i = str.length -1; i >= 0; i--){
    revString = revString + str[i]
  }
  return revString

  /////////////////////////////////
  let revString = '';
  for(let i = 0; i <= str.length -1; i++){
    revString =  str[i] + revString
  }
  return revString

  /////////////////////////////////
  let revString = '';
  for(let char of str){
    revString =  char + revString
  }
  return revString

  /////////////////////////////////
  let revString = ''
  str.split('').forEach(char => revString = char + revString);
  return revString

  /////////////////////////////////
  
  return str.split('').reduce((revString, char) => char + revString, '')
}

/////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reveseStr = str.split('').reverse().join('')
  return reveseStr === str
}

/////////////////////////////////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const reverseToString = int.toString().split('').reverse().join('')
  return parseInt(reverseToString) * Math.sign() // To Change to integer and keep the sign (-)
  
}

/////////////////////////////////////////////////////////////////////////

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  const strToArry = str.toLowerCase().split(' ')
  for(let i = 0; i < strToArry.length; i++){
    strToArry[i] = strToArry[i].substring(0,1).toUpperCase() + strToArry[i].substring(1)
  }
  return strToArry.join(' ')
  ///////////////////////////// BEST WAY
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0] .toUpperCase() + word.substr(1))
    .join(' ')
  ///////////////////////////// Regular Expression
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase())
}




/////////////////////////////////////////////////////////////////////////

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = ''

  str.split('').forEach(function(char){
    if(char[char]){
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  for(let char in charMap){
    // debugger
    if(charMap[char] > maxNum){
      maxNum = charMap[char];
      maxChar = char
    }
  }
  return maxChar;
}

/////////////////////////////////////////////////////////////////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1; i <= 100; i++){
    // OR (i % 15 === 0)
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    } else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}



// Call Function
const output = fizzBuzz();

console.log(output)