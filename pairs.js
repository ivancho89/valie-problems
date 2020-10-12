const {pairsTest} = require("./fixtures")

const pairs = (pairsList = [])=>{

	let response = []

	for(var i = 0; i<pairsList.length;i++){

		for(var j = i+1; j< pairsList.length;j++){

			if( (pairsList[i] < pairsList[j])  && (pairsList[pairsList[i]] > pairsList[pairsList[j]])  ){
				response.push({
					i:pairsList[i], 
					j:pairsList[j],
					ai:pairsList[pairsList[i]],
					aj:pairsList[pairsList[j]]
				})
			}
		}
	}

	console.log("\r\n PAIRS :: Misordered Pairs :: ", response.length, " | Pairs ::  ", response)
}

pairs(pairsTest)