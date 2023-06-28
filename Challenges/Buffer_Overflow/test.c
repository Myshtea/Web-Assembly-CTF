#include <stdio.h>
#include <string.h>

const unsigned char Normal_Formula[] = "The recipe for food is mainly ingredients !\n";



unsigned char *print_name(unsigned char *name){
	unsigned char buff[15];
	char pass = 0;
	
	strcpy((char*)buff, (char *)name);

	if(strcmp((char *)buff,"S3cr3tN4m3")){
		printf("Hello user. Nothing shady is going on here as you can see!\n");
	}
	else{
		printf("Hello secret user. May we begin this top-secret reunion\n");
		pass = 1;
	}

	if(pass != 0){
		unsigned char str[] = {170,160,171,183,142,185,170,170,169,190,131,186,169,190,170,160,163,187,177, 0};
		for (int i = 0; i < 19; i++)
			str[i] ^= 0xcc;
    		return str;
	}
	return Normal_Formula;
}

int main(){
	char str[100];
	scanf("%s",str);
	printf("%s\n",print_name(str));
}
