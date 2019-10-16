
var objs = [ 
  { name: 'Lazslo', ranking: 1     },
  { name: 'Pig',    ranking: 1   },
  { name: 'Pirate', ranking: 4 },
  { name: 'Pirate', ranking: 4 }
];



function order( a, b ) {
  if ( a.ranking < b.ranking ){
    return 1;
  }
  if ( a.ranking > b.ranking ){
    return -1;
  }
  return 0;
}

let objsByRanking = objs.sort( order );

const rankingValues = objs.map(item => item.ranking)
const rankingSum = rankingValues.reduce((prev, next) => prev + next);
const average = rankingSum / rankingValues.length;
console.log(average)