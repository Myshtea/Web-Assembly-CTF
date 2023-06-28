//const init = cwrap('init',['string']);
////Unused
////const old_delete_string = cwrap('old_delete_string',['string']);
//const delete_string = cwrap('delete_string',['string']);
//const append_string = cwrap('append_string','string',['string']);
const print_note = cwrap('print_note','string',['string']);
//const note_size = cwrap('note_size',['int']);
//const debug_print = cwrap('debug_print');


function print_to_flag(str) {
	//Beautiful XSS possibilities.
	document.querySelector("#flag").innerText = "Your note is : "+str;
}


async function Wasm_print_note() {
	const name = document.getElementById("name").value;
	//console.log(name);

	print_to_flag(print_note(name));
}

