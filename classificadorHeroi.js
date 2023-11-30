let nome = "",
  i = 0;

do {
  console.log("Diga o nome do heroi");
  nome = "Tati";
} while (nome === "" && i <= 0);
{
  console.log(`O heroi: ${nome} tem saldo de: ${toRank(rank(105, 5))}`);
  i++;
}
function rank(vitoria, derrota) {
  let partidasRank = vitoria - derrota;
  return partidasRank;
}
function toRank(rank) {
  if (rank < 10) {
    let valueRank = rank + " ferro";
    return valueRank;
  } else if (rank === 11 || rank <= 20) {
    let valueRank = rank + " Bronze ";
    return valueRank;
  } else if (rank === 21 || rank <= 50) {
    let valueRank = rank + " Prata ";
    return valueRank;
  } else if (rank === 51 || rank < 80) {
    let valueRank = rank + " Ouro ";
    return valueRank;
  } else if (rank === 81 || rank <= 90) {
    let valueRank = rank + " Diamante ";
    return valueRank;
  } else if (rank === 91 || rank <= 100) {
    let valueRank = rank + " Lendário ";
    return valueRank;
  } else if (rank >= 101) {
    let valueRank = rank + " Imortal ";
    return valueRank;
  }
}
