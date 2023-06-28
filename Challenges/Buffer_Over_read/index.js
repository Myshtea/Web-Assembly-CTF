const init = cwrap('init',['string']);
//Unused
//const old_delete_string = cwrap('old_delete_string',['string']);
const delete_string = cwrap('delete_string',['string']);
const append_string = cwrap('append_string','string',['string']);
const note_size = cwrap('note_size',['int']);
const debug_print = cwrap('debug_print');


function print_to_flag(str) {
	//Beautiful XSS possibilities.
	document.querySelector("#flag").innerText = "Your note is : "+str;
}

function print_to_size(str) {
        //Beautiful XSS possibilities.
        document.querySelector("#size").innerText = "Size of note is : "+str;
}




var val = 0;
async function Wasm_append_string() {
	if (val == 0){
		print_to_size("0");
		print_to_flag(init());
		val = 1;
	}
	const name = document.getElementById("name").value;
	console.log(name);

	print_to_flag(append_string(name));
}

async function Wasm_delete_string() {
	print_to_flag(delete_string());
}

async function Wasm_read_size() {
	print_to_size(note_size());
}

