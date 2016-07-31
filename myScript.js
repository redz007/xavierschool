

	

	function myStyle1()
			{
				myStyle1 = document.getElementById('style');
				style.href = "CSS/style1.css";
			}
	function myStyle2()
			{
				myStyle2 = document.getElementById('style');
				style.href = "CSS/style2.css";
			}
	function myStyle3()
			{
				myStyle3 = document.getElementById('style');
				style.href = "CSS/style3.css";
			}



	function  checkPassword(type,username,password){
				if(type==0){alert("Please select User Type")}
   
    			if(type==3){
    	         	var userPattern=/^[A-Z]+$/;
		    	 	if(userPattern.test(username)==false){alert("Invalid ID number!\n Please enter a valid family name.\n\n Must be all capital letters.")}
                 	var passPattern=/[a-z]+(@gmail.com|@yahoo.com)/;
                 	if(passPattern.test(password)==false){alert("Invalid password!\nPlease enter a valid e-mail address.")}	

               }
    			else if(type==1){
                 	var userPattern=/^\d\d\d-\d\d-\d\d\d\D/;
                 if(userPattern.test(username)==false){alert("Invalid ID number!\nPlease enter your ID number using this format is NNN-NN-NNNL")}
                 	var passPattern=/^[a|A-z|Z]+$/;   
                 if(passPattern.test(password)==false){alert("Invalid password!\nAll letters, atleast 5 characters.")}
              }


  				else if(type==2){
                	var userPattern=/^[\d\d\d\d]+[-]+(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|NOV|DEC)+[-]+[0-3]+[0-9]+[-]+[\d\d]+$/;
                if(userPattern.test(username)==false){alert("Invalid ID number!\n Please enter your ID number using the YYYY-MMM-DD-NN")}
                if((password.length>=5)&&(password.length<=8)){
               	 if(password.search(/[0-9]/)<0){alert("Your password must have atleast one digit!")}
                 if(password.search(/[a|A-z|Z]/)<0){alert("Your password must have atleast one letter!")}
               }

               else{alert("Invalid password!\n Password must be 5-8 characters in length combination of letters and digits.")}

            }
}




	