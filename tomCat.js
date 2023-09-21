function tomCat (input) {
let restDays = Number(input[0]) ;
let daysOffPlayingMins = restDays * 127 ;
let workingDaysPlayingMins = (365 - restDays) * 63 ;
let totalPlayTimeMins = daysOffPlayingMins + workingDaysPlayingMins ;




if (totalPlayTimeMins > 30000) {
    let extraTimeMins = totalPlayTimeMins - 30000 ;
    let extraHrs = Math.floor(extraTimeMins / 60) ;
    let extraMins = extraTimeMins % 60 ;
    
    
    console.log("Tom will run away");
console.log(`${extraHrs} hours and ${extraMins} minutes more for play`);

} 

else if (totalPlayTimeMins <= 30000) {
    console.log("Tom sleeps well");
let timeLeftForPlay = 30000 - totalPlayTimeMins ;
let timeLeftHrs = Math.floor(timeLeftForPlay / 60) ;
let timeLeftMins = timeLeftForPlay % 60 ;


console.log(`${timeLeftHrs} hours and ${timeLeftMins} minutes less for play`);

}


}

tomCat (["113"]) ;

// Почични дни: 20 * 127 = 2 540 минути игра
// Работни дни: 365 - 20 = 345 * 63 = 21 735 минути игра
// 30 000 > 24 274 => остават 5725 мин = 95 часа и 25 мин