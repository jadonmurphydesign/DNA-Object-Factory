// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

//Creates object Factory that creates strands of DNA using the mockUpStrand function

const pAequorFactor = (specimenNum, dna) => {
  return ({
    specimenNum,
    dna,
    mutate(){
      const index = math.floor(math.random() * this.dna.length)
      let newIndex = returnRandBase();
      while (this.dna[index] === newIndex){
        newIndex = returnRandBase
      }
      return this.dna
    },
    
    //Compares 2 sequences of DNA and returns percent of similarity
    compareDna(spec2){
      let counter = this.dna.reduce((acc, cur, idx, src) =>{
        if (this.dna[idx] === spec2.dna[idx]){
          return acc + 1
        }
        return acc
      })
      const divideThem = counter/this.dna.length;
      const toPercent = divideThem.toFixed(1) + '%';
      console.log(`Specimen number ${this.specimenNum} and ${spec2.specimenNum} have ${toPercent} dna in common`)
    },
    
    //Organism is most survivable if 60 percent DNA strand is comprised of either C or G, this function checks to see if this is the case and returns true or false
    willLikelySurvive (){
      const checkOrg = this.dna.filter(el => el === 'C'|| el === 'G');
      return checkOrg.length / this.dna.length >= 0.6;
    }
    
  });
};

//Use the object factory to create an array of 30 objects, the objects must have a willLikelySurvive = true
let studyGroup = [];
let counter = 1;

while (studyGroup.length <= 30){
  let newSpec = (pAequorFactor(counter, mockUpStrand()))
  if (newSpec.willLikelySurvive()){
    studyGroup.push(newSpec)
  }
  counter++
}

console.log(studyGroup)

//This double checks that elements of the study group array all willLikelySurvive = true, created the test because i wasnt sure my willLikelySurvive function was working

const doubleCheck2 = (specimenNum) =>{
  if (specimenNum.willLikelySurvive()){
    console.log('survivable')
  } else{
    console.log('ur bad at coding')
  }
}
doubleCheck2(studyGroup[8])