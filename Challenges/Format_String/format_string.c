#include <emscripten.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

//This is the flag xor 0xCC
//unsigned char str[13] = {0x8a,0xfc,0xbe,0xa1,0x8c,0xb8,0x93,0xf9,0xb8,0xbe,0xfd,0xa2,0xab};

unsigned char *print_note(unsigned char *input){
    char str[] = "f0rm4t_5tr1ng";

    if (strlen(input) > 250){
        printf("Note too long\n");
    }
    printf(input);
    printf("\n");
    return input;
}

