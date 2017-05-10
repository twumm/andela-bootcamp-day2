/*Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string. 
The function should return a JSON object showing the words identified, and their occurrences.
For example for the input `olly olly in come free`, the output should be
>olly: 2
>in: 1
>come: 1
>free: 1*/

function words(sentence){
  var sentenceArray = sentence.split(' ');
  var obj = { };
  for (var i = 0, j = sentenceArray.length; i < j; i++) {
   if (obj[sentenceArray[i]]) {
      obj[sentenceArray[i]]++;
   }
   else {
      obj[sentenceArray[i]] = 1;
   }
  
  }
return obj;
}