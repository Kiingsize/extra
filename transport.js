function transport (input) {
let km = Number(input[0]) ;
let travelDorN = input[1] ;

if (km < 20 && travelDorN !== `night`) {
  let taxiPrice = 0.70 + (km * 0.79) ;
  console.log(taxiPrice.toFixed(2));  
} else if (km < 20 && travelDorN === `night`)   {
    let taxiPrice = 0.70 + (km * 0.90) ; 
    console.log(taxiPrice.toFixed(2));
} if (km >= 100){
    let trainPrice = km * 0.06 ;
    console.log(trainPrice.toFixed(2));
} else if (km >= 20) {
    let busPrice = km * 0.09 ;
    console.log(busPrice.toFixed(2));
}


}

transport (["25" , "night"])

// Разстоянието е под 20 км  може да 
// се ползва само такси. Началната такса е 0.70 лв. 
// Понеже е през деня, тарифата е 0.79 лв. / км. 
// С такси цената е: 0.70 + 5 * 0.79 = 4.65 лв.