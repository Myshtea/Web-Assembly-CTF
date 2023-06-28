#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <emscripten.h>

/* Represents a message and an output channel */
typedef struct Message {
	char msg[256];
	void (*out)(const char *);
} Mess;

/* Super custom communication function */
// Todo : Print to a log instead
void communicate(const char *msg) {
	printf("%s", msg);
}

/* Receives a message and send it to the default output channel */
void com(const char * payload) {
	Mess mess;
	mess.out = &communicate;	

	printf("I've discovered this function : %x\n",&emscripten_run_script);

	strcpy(mess.msg, payload);
	
	emscripten_run_script("console.log('Message Saved !!');");
	
	mess.out(mess.msg);
} 
