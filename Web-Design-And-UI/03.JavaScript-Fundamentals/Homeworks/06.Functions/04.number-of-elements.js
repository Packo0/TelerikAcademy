 //Paste this function to console of some html page

 function getNumberOfDivElements() {
     var count = 0,
         word = '<div',
         htmlAsText = document.body.innerHTML,
         pos = htmlAsText.indexOf(word);

     while (pos !== -1) {
         count += 1;
         pos = htmlAsText.indexOf(word, pos + 1);
     }

     return count;
 }

 console.log('Number of tag elements: ' + getNumberOfDivElements());
