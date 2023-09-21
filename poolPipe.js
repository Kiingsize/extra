function poolPipe (input) {
let vLitres = Number(input[0]) ;
let P1 = Number(input[1]) ;
let P2 = Number(input[2]) ;
let HoursAbs = Number(input[3]) ;
 let p1For3Hrs = P1 * HoursAbs ;
 let p2For3Hrs = P2 * HoursAbs ;
let bothPipesFor3Hrs = p1For3Hrs + p2For3Hrs ;
let poolFillPercent = (bothPipesFor3Hrs / vLitres) * 100 ;
let p1Percent = (p1For3Hrs / bothPipesFor3Hrs) * 100 ;
let p2Percent = (p2For3Hrs / bothPipesFor3Hrs) * 100 ;

if (bothPipesFor3Hrs <= vLitres) {
    console.log(`The pool is ${poolFillPercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(2)}%.`);
} else if (bothPipesFor3Hrs > vLitres) {
    let extraLitres = bothPipesFor3Hrs - vLitres ;
    console.log(`For ${HoursAbs} hours the pool overflows with ${extraLitres} liters.`);
}



}

poolPipe (["100" , "100" , "100" , "2.5"])


// // За 2.5 часа:
// Първата тръба е напълнила – 250 л.
// Втората тръба е напълнила – 250 л.
// Общо – 500 л. > 100 л. => 400 л. са прелели.