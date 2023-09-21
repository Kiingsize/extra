function vegMarket (input) {
let pricePerKgVegs = Number(input[0]) ;
let pricePerKgFruits = Number(input[1]) ;
let totalVegsKg = Number(input[2]) ;
let totalFruitsKg = Number(input[3]) ; 
let totalVegsPriceLv = pricePerKgVegs * totalVegsKg ;
let totalFruitsPriceLv = pricePerKgFruits * totalFruitsKg ;
let totalPriceLv = totalVegsPriceLv + totalFruitsPriceLv ;
let totalPriceEuro = totalPriceLv / 1.94 ;

console.log(totalPriceEuro.toFixed(2));

}

vegMarket (["1.5" , "2.5" , "10" , "10"]) ;