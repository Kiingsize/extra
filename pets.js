function pets (input) {
let daysCnt = Number(input[0]) ;
let leftFoodKgs = Number(input[1]) ;
let foodPerDayDogKgs = Number(input[2]) ;
let foodPerDayCatKgs = Number(input[3]) ;
let foodPerDayTurtleGrms = Number(input[4]) ;
let dogFood = daysCnt * foodPerDayDogKgs ;
let catFood = daysCnt * foodPerDayCatKgs ;
let turtleFoodGrms = daysCnt * foodPerDayTurtleGrms ;
let turtleFoodInKgs = turtleFoodGrms / 1000 ;
let totalFoodKgs = dogFood + catFood + turtleFoodInKgs ;

if (totalFoodKgs <= leftFoodKgs) {
    
    let extraFood = leftFoodKgs - totalFoodKgs ;
    console.log(`${Math.floor(extraFood)} kilos of food left.`);
} else {
    let neededFood = totalFoodKgs - leftFoodKgs ;
    
    console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`)
}


}

pets (["5" , "10" , "2.1" , "0.8" , "321"]) ;
