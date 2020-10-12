const {knightTest} = require("./fixtures")

const calculateMinSteps= (startX, startY, endX, endY, visited=[])=>{


	const rows = [2,1,-1,-2,-2,-1,1,2];
	const cols = [1,2,2,1,-1,-2,-2,-1];

	const queue = [];

	queue.push({x:startX, y:startY, steps: 0})


	if(!visited[`${startX}`])
		visited[`${startX}`] = []

	visited[`${startX}`][`${startY}`] = true


	while(queue.length > 0){

		const current = queue[0]
		queue.splice(0, 1)


		current.dist = Math.sqrt( Math.pow((current.x-endX), 2) + Math.pow((current.y-endY), 2) );

        if(current.x == endX && current.y == endY){
            return current.steps 
        }

        for(var i=0; i<8;i++){


        	const newRow = current.x + rows[i];
	        const newCol = current.y + cols[i];

	        const hasVisited = visited[`${newRow}`] ? visited[`${newRow}`][`${newCol}`] : null;

	        const currentDistance = Math.sqrt( Math.pow((newRow-endX), 2) + Math.pow((newCol-endY), 2) );

	        if( (currentDistance <= current.dist) && !hasVisited){

	     		if(!visited[`${newRow}`]){
		        	visited[`${newRow}`] = []
		        }

		         visited[`${newRow}`][`${newCol}`] = true;
		   		 var nodeObj = {x:newRow, y:newCol, steps: current.steps + 1}
		         queue.push(nodeObj)

	        }

        }

	}

}

const kinghtSteps = (startCordinates = [0,0], endCordinates=[0,0])=>{
	var res = calculateMinSteps(startCordinates[0], startCordinates[1], endCordinates[0], endCordinates[1])
	console.log(`\r\n KNIGHT MOVES :: Starting from ${startCordinates} to ${endCordinates} the Min # Steps are :: `, res)

}


kinghtSteps(knightTest[0], knightTest[1])
