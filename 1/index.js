const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
]
const repeat_num = 500;

function random_data(arr){
	let rand = Math.random();
	let ind = 0;
	let start = 0;

	for (var i = 0; i < arr.length; i++){
		var item = arr[i];
		if (rand >= start && rand <= start + parseFloat(item.probability)){
			ind = i;
			break;
		}
		start += parseFloat(item.probability);
	}
	return arr[ind];
}

function generate_data(){
	const gen_arr = projects.map(function(item, index){return {id: item.id, called: 0}});
	for(var i = 0; i < repeat_num; i++){
		var item = random_data(projects);
		document.write(item.name);
		gen_arr[parseInt(item.id) - 1].called ++;
	}

	document.write("<hr>");
	for(var i = 0; i < gen_arr.length; i++){
		document.write("ID " + gen_arr[i].id + " = " + gen_arr[i].called + ", ");
	}
}


generate_data();
