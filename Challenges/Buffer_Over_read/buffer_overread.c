#include <emscripten.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

//This is the flag xor 0xCC
unsigned char str[] = {170,160,171,183,142,185,170,170,169,190,131,186,169,190,170,160,163,187,177, 0};
unsigned char note[300];
unsigned int size;

unsigned char *init(){
	for (int i = 0; i < 19; i++)
		note[250+i] =  str[i] ^ 0xcc;
	note[0] = '\0';
	size = 0;
	return note;
}

unsigned char *delete_string(){
	size = 0;
	note[0] = '\0';
	return note;
}

unsigned char *old_delete_string(){
	note[0] = '\0';
	return note;
}

void debug_print(){
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
	printf("%s\n",buff);
}

unsigned char *append_string(unsigned char *input){
	if(strlen(input) + strlen(note) > 250)
		return note;
	size += strlen(input);
	strcat(note, input);
	return note;
}

unsigned int note_size(){
	return size;
}

