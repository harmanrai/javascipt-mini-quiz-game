//building a simple javascript mutltip choice quiz pure javascript 
var questions = [    // diffrent questions that we have presented.

	{
  	prompt: "what is the color of trees?\n (a) pink\n (b) red\n (c) green\n",
    
    answer: "c" 	
  },
  
  {
  prompt: "what is the color of apples?\n (a) blue\n (b) teal\n (c) red\n",
  
  	answer: "c"
  
  },
  

]


var score = 0; // how many questions basically the user will get correct and what number we start at which is zero here.


for (var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
  	score ++;
    alert("correct you got it!!");
   }
   else {
    	alert ("wrong buddy");

}

}

alert(" you got this " + score + "/" + questions.length);




// basically what we have is a for loop that is looping through asking the questions opening the window prompt with the question and checking IF the response is correct and if it is correcd it will alert something out and if it is not correct then it will also alert something then at the end we will see the total score correct....
