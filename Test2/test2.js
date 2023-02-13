const n = parseInt(process.argv[2]);
const scores = process.argv.slice(3, 3 + n).map(Number);
const m = parseInt(process.argv[3 + n]);
const gitsScores = process.argv.slice(4 + n, 4 + n + m).map(Number);

// untuk menghitung peringkat para pemain
const calculateRanking = (scores, gitsScore) => {
  const sortedScores = [...scores, gitsScore].sort((a, b) => b - a);
  let rank = 1;
  for (let i = 0; i < sortedScores.length; i++) {
    if (sortedScores[i] === gitsScore) {
      return rank;
    }
    if (sortedScores[i] !== sortedScores[i + 1]) {
      rank++;
    }
  }
  return rank;
};

// untuk menghitung peringkat GITS
const rankings = gitsScores.map(gitsScore =>
  calculateRanking(scores, gitsScore)
);

console.log(rankings.join(" "));