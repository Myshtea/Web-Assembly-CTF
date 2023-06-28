all: bufferOverflow bufferOverread formatString RCE XSS

bufferOverflow: Buffer_Overflow/buffer_overflow.c 
	emcc Buffer_Overflow/buffer_overflow.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_print_name']" -o Buffer_Overflow/public/buffer_overflow.js

bufferOverread: Buffer_Over_read/buffer_overread.c
	emcc Buffer_Over_read/buffer_overread.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_init','_delete_string','_append_string','_note_size','_old_delete_string','_debug_print']" -o Buffer_Over_read/public/buffer_overread.js

formatString: Format_String/format_string.c
	emcc Format_String/format_string.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_print_note']" -o Format_String/public/format_string.js

XSS: XSS/XSS.c XSS/stub-server.js
	emcc XSS/XSS.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_super_fast_calculator']" -o XSS/calc.js
	cat XSS/stub-server.js >> XSS/calc.js
	mv XSS/calc.js XSS/server.js

RCE: RCE/RCE.c RCE/stub-server
	emcc RCE/RCE.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_com','_communicate']" -o RCE/com.js
	cat RCE/stub-server >> RCE/com.js
	mv RCE/com.js RCE/server.js

functionRedirect: 
	emcc Function_Redirect1/function_redirect.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_func_ptr_overwrite']" -o Function_Redirect1/public/function_redirect.js


clean: cleanBOF cleanBOR cleanFS cleanRCE cleanXSS
cleanBOF:
	rm -f Buffer_Overflow/public/buffer_overflow.*	

cleanBOR:
	rm -f Buffer_Over_read/public/buffer_overread.*

cleanFS:
	rm -f Format_String/public/format_string.*

cleanRCE:
	rm -f RCE/rm server.js
	rm -f RCE/com.wasm

cleanXSS:
	rm -f XSS/rm server.js
	rm -f XSS/calc.wasm


.PHONY: XSS RCE
