//Count number of Vowels in String Function 

function countVowel(str) {
    let count = 0;
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
    if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
    str.charAt(i)=="o"||str.charAt(i)=="u"){
    count++; //Increment vowel count
    }
    }
    return count;
   }
   console.log(countVowel("Hello")) //2
   console.log(countVowel("Umbrella")) //