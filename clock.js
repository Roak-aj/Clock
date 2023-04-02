
function currentTime(){
	var date = new Date()
	var root=document.querySelector(':root')
	var DayNight=document.getElementById('Day-Night')
	var currentHour = date.getHours()
	if(currentHour>12){
		DayNight.innerText="PM"
	}
	else{
		DayNight.innerText="AM"
	}
	var currentMinute = date.getMinutes()
	if(currentMinute > 30){
		currentHour=currentHour+(currentMinute/10*0.1666666666666667)
	}
	else{
			currentHour=currentHour
	}
	var currentSecond = date.getSeconds()
	var bigHand = document.getElementsByClassName('bighand')
	var middleHand = document.getElementsByClassName('middlehand')
	var shortHand = document.getElementsByClassName('shorthand')
	var shortHandAngle=String(currentHour*30)
	var middleHandAngle=String(currentMinute*6)
	var bigHandAngle=String(currentSecond*6)
	shortHand[0].style.rotate=shortHandAngle+'deg'
	middleHand[0].style.rotate=middleHandAngle+'deg'
	bigHand[0].style.rotate=bigHandAngle+'deg'
	setTimeout(currentTime, 1000)
}
currentTime()
// root.style.setProperty("--rotate-Angle-Short", String(Number(shortHandAngle)+360)+'deg')
// root.style.setProperty("--rotate-Angle-Middle", String(Number(middleHandAngle)+360)+'deg')
// root.style.setProperty("--rotate-Angle-Big",  String(Number(bigHandAngle)+360)+'deg')

