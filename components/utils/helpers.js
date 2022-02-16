
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

export const truncate = (string, length) => {
   if (string?.length <= length) return string

   let separator = "......"

   let sepLen = separator.length,
      charsToShow = length - sepLen,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2)

   return (
      string?.substr(0, frontChars) +
      separator +
      string?.substr(string?.length - backChars)
   )
}


export const computeEarning = ({ results, STARTING_BLOCK, ENDING_BLOCK, RATE, to }) => {
   const everyHolds = results.reduce((acc, val) => {
      if (val.to.toLowerCase() === to.toLowerCase()) {
         acc.push({
            tokenID: val.tokenID,
            startBlockNumber: Number(val.blockNumber),
            endBlockNumber: null,
            earnedBlockNumber: null,
         });
      } else if (val.from.toLowerCase() === to.toLowerCase()) {
         const transactIn = acc.find(t => t.tokenID === val.tokenID && !t.endBlockNumber);
         transactIn.endBlockNumber = Number(val.blockNumber);
      }
      return acc;
   }, [])
   const response = everyHolds
      // for nft that still holding set the endBlockNumber as ENDING_BLOCK
      .map(h => ({
         ...h,
         endBlockNumber: h.endBlockNumber || ENDING_BLOCK
      }))
      // endBlockNumber must later than STARTING_BLOCK to earn token
      // if endBlockNumber earlier than STARTING_BLOCK, then ignore it
      .filter(h => h.endBlockNumber > STARTING_BLOCK)
      // we only compute earning since STARTING_BLOCK,
      // set the starting block to STARTING_BLOCK, if it is earlier than STARTING BLOCK
      .map(h => ({
         ...h,
         startBlockNumber: h.startBlockNumber > STARTING_BLOCK ? h.startBlockNumber : STARTING_BLOCK,
      }))
      // compute earned block number
      .map(h => ({
         ...h,
         earnedBlockNumber: h.endBlockNumber - h.startBlockNumber,
      }))
      // sum up all earned block number
      .reduce((acc, val) => {
         acc += val.earnedBlockNumber;
         return acc;
      }, 0)
   return response * RATE;
}


