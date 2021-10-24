
export const parseRandom = (state) => {
   let haveIt = [];
   function generateUniqueRandom(maxNr) {
      //Generate random number
      let random = Math.floor(Math.random() * maxNr)

      //Coerce to number by boxing
      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         return random;
      } else {
         if (haveIt.length < maxNr) {
            //Recursively generate number
            return generateUniqueRandom(maxNr);
         } else {
            // console.log('No more numbers available.')
            return false;
         }
      }
   }

   state.forEach(item => {
      generateUniqueRandom(state.length)
   })
   return haveIt
}



