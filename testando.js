function palindrome(str) {
   const onlyAlnum = str.toLowerCase();
   let result = onlyAlnum.match(/[a-z0-9]/gi,'')
   let reverseResult = result.reverse().join('')
   if(result === reverseResult){
     return true
   }else{
     return false
   }
 }
 
console.log(palindrome("almostomla"))