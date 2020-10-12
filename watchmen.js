const {watchmenTest} = require("./fixtures")

const watchmen = (maxDays = 0, totalWatchmen= 0, daysA =[], daysB = [])=>{

	console.log(maxDays, totalWatchmen, daysA, daysB)

	let totlaDays = []
	for(var i=0;i<totalWatchmen;i++){

		for(var j = daysA[i]; j <= daysB[i]; j++){

			if( (daysA[i] < daysB[i])  && ( daysB[i] < maxDays) )
				totlaDays.push(j)
		}	

	}

	totlaDays = [...new Set(totlaDays)]
	console.log("\r\n WATCHMEN :: days :: ", totlaDays, " | total days :: ", totlaDays.length)
}


watchmen(watchmenTest.days, watchmenTest.personal, watchmenTest.daysA, watchmenTest.daysB)