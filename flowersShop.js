function flowersShop (input) {
let mgnCnt = Number(input[0]) ;
let hyacinCnt = Number(input[1]) ;
let rosesCnt = Number(input[2]) ;
let cactusCnt = Number(input[3]) ;
let giftPrice = Number(input[4]) ;
let totalFlowersPrice = (mgnCnt * 3.25) + (hyacinCnt * 4) + (rosesCnt * 3.50) + (cactusCnt * 8) ;
let totalFlowersPriceAfterTax = 0.95 * totalFlowersPrice ;

if (totalFlowersPriceAfterTax >= giftPrice) {
    let leftMoney = totalFlowersPriceAfterTax - giftPrice ;
    console.log(`She is left with ${Math.floor(leftMoney)} leva.`) ;
} else {
    let moneyNeeded = giftPrice - totalFlowersPriceAfterTax ;
    console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`) ;
}

}

flowersShop (["15" , "7" , "5" , "10" , "100"]) ;