#include <emscripten.h>
#include <stdio.h>
#include <string.h>

const unsigned char Normal_Formula[] = "The recipe for food is mainly ingredients !\n";

unsigned char *print_name(unsigned char *name){
	int pass = 0;
	unsigned char buff[15];
	strcpy((char*)buff,(char *)name);
	printf("pass = %d\n",pass);
	if(strcmp((char *)buff,CENSORED)){
		printf("Hello user. Nothing shady is going on here as you can see!\n");
	}
	else{
		printf("CENSORED\n");
		pass = 1;
	}

	if(pass == 1){
		unsigned char str[] = CENSORED;
    		return str;
	}
	return Normal_Formula;
}


