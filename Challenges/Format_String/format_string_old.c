#include <emscripten.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

//This is the flag xor 0xCC
unsigned char str[13] = {0x8a,0xfc,0xbe,0xa1,0x8c,0xb8,0x93,0xf9,0xb8,0xbe,0xfd,0xa2,0xab};

unsigned char note[250];
unsigned int size;

unsigned char *init(){
	note[0] = '\0';
	size = 0;
    for (int i = 0; i < 13; i++)
		str[i] =  str[i] ^ 0xcc;
	
	return note;
}

unsigned char *delete_string(){
	size = 0;
	note[0] = '\0';
	return note;
}

//unsigned char *old_delete_string(){
//	note[0] = '\0';
//	return note;
//}

void debug_print(){
    unsigned char flag[14];
	for (int i = 0; i < 12; i++)
		flag[i] =  str[i] ^ 0xcc;
    flag[13] = '\0';
	printf("Printing %d characters :\n",size);
	int i = 0;
	unsigned char buff[1000];
	for (;i < size; i++){
		if(i > 1000)
			break;
		if(isprint(note[i]))
			buff[i]=note[i];
		else
			buff[i]='.';
	}	
	buff[i] = '\0';
	printf(buff);
}

unsigned char *append_string(unsigned char *input){
	if(strlen(input) + strlen(note) > 250)
		printf("Line is too long :\n");
        printf(input);
        return note;
	size += strlen(input);
	strcat(note, input);
	return note;
}

unsigned int note_size(){
	return size;
}

