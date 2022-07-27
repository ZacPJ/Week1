const alarmSet = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am",

}
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let day = days[Math.floor(Math.random()*7)]
console.log(day)

if(day == "Saturday" || day == "Sunday"){
    alarm = alarmSet.weekendAlarm
}else{
    alarm = alarmSet.weekdayAlarm
}
console.log(alarm)