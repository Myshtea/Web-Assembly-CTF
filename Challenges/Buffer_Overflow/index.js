
const encode = function stringToIntegerArray(string, array) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < string.length; i++) {
		array[i] = alphabet.indexOf(string[i]);
	}
};

const decode = function integerArrayToString(array) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let string = "";
	for (let i = 0; i < array.length; i++) {
        	string += alphabet[array[i]];
	}
	return string;
};

function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

function print_to_flag(str) {
	//Beautiful XSS possibilities.
	document.querySelector("#flag").innerText = "Recipe is : "+str;
}

const print_name = cwrap('print_name','string',['string']);

async function Wasm_Call() {
	const name = document.getElementById("name").value;
	console.log(name);

	/*const response = await fetch("public/buffer_overflow.wasm");
	const file = await response.arrayBuffer();
	const wasm = await WebAssembly.instantiate(file);
	const { memory, print_name } = wasm.instance.exports;	


	const array = new Int32Array(memory.buffer, 0, name.length);
	*/
	const ret = print_name(name);
	//encode(name,array);
	console.log(ret);
	print_to_flag(ret);
}

const btn = document.querySelector("button");
btn.addEventListener("click", Wasm_Call);


