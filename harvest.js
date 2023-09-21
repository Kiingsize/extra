function harvest (input) {
let GrapeMtr = Number(input[0]) ;
let GrapePer1Mtr = Number(input[1]) ;
let neededLitresWine = Number(input[2]) ;
let workersCnt = Number(input[3]) ;

let totalGrape = GrapeMtr * GrapePer1Mtr ;
let totalWine = (0.40 * totalGrape) / 2.5 ;

if (totalWine < neededLitresWine) {
let neededWine = neededLitresWine - totalWine ;
console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`)
} else if (totalWine >= neededLitresWine) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`)
let extraWine = totalWine - neededLitresWine ;
let winePerWorker = extraWine / workersCnt ;
console.log(`${Math.ceil(extraWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
}

}
harvest (["1020" , "1.5" , "425" , "4"])