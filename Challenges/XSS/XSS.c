#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <emscripten.h>
#include <stdlib.h>

unsigned char *super_fast_calculator(int val1, const char *op, int val2) {
	unsigned char output[100];
	int i = 0;
	
	if(!strcmp(op, "plus")){
		sprintf(output, "Result of %d + %d is : %d",val1,val2,val1+val2);	
	}
	else if (!strcmp(op, "minus")) {
		sprintf(output, "Result of %d - %d is : %d",val1,val2,val1-val2);	
	}
	else {
		snprintf(output, "Error with operator : %s", op);
	}

	return output;
} 
