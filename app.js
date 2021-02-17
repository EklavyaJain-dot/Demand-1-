const input = document.getElementById("input");

userquestion = {
    "Hello": "Hi, how may I help?",
    "hello":"Hi, how may I help",
    "Hi":"Hello, how may I help?",
    "hi":"Hello, how may I help?",
    "How are you":"I am fine, what about you",
    "how are you":"I am fine, thank you",
    "How are you?":"I am fine, Thank You",
    "how are you?":"I am fine, Thank You",
    "I am fine":"Good to hear that",
    "i am fine":"Good to hear that",
    "I have some questions":"Yeah, am ready to help",
    "i have a question":"Yeah, I am ready to help",
    "I want some help":"Yeah, I am ready to help",
    "What can you do?": "I can do anything you want on this website",
    "Can you pls open the dress section": "Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "can you please open the DRESS SECTION": "Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "Can you Pls take me to the dress section" :"Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "can you take me to the dress section" :"Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "can you tell me the way to open the dress section": "Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "What is your name":"My name is Chatbot",
    "Who are you?":"I am your virtual assisant",
    "who is the owner of this website":"Eklavya Jain, Pratham Kashyap, Cris M Gupta",
    "I want to go to the dress section":"Ok, go to the main page And click on the mentioned section that for purchasing dress go to the dress section",
    "Hi, how are you?":"Hi, I am fine, Thank You",
    "Who is the Founder of this site":"Eklavya Jain",
    "Can you Help Me":"Yes, I am here to help",
    "can you help me":"Yes, I am here to help",
    "Can you help me":"Yes, I am here to help",
    "What can we buy from this site":"You can buy anything from this site!",
    "CAN YOU HELP ME":"Yes, I am here to help",
    "What can I buy from this site":"You can buy anything from this site",
    "can you take me to the food section?":"Yes, go to the main page and click on the food Card",
    "Can I get a Pizza":"Yes for sure. Just go to the main page and click on the Food Card & then click on buy button labelled beyond pizza",
    "CaN I GeT A PiZzA":"Yes for sure. Just go to the main page and click on the Food card & then click on buy button labelled beyond pizza",
    "I want to give Feedback":"Okay, For this you have to go to the main page and click in the Feedback text written in the footer",
    "I want to talk to the owner":"Ok, Then please proceed by calling on this mobile number: 9876309321",
    "I did not like the website":"Oh said to hear that you can give your feedback by going to the main page and click on feedback text written in the footer",
    "I liked the website":"That's Great, why not you share your experience by going to the feedback form by clicking on the text written in footer of the man page",
    "I want to buy books":"OK, no problen, just go to the main page and then click on books card",
    "I liked the website very much":"That's Great, why not you share your experience by going to the feedback form by clicking on the text written in footer of the man page",
    "Good Afternoon ChatBt":"Good afternoon Sir/Ma'am, How may I help you?",
    "Can I buy cycles":"Yes why not, just go the main page and click on the Cycles Card to buy cycles",
    "I want to buy Laptops":"Ok, then go to the Main page of the website and then click on the tech Items card mentioned",
    "I want to contact the owner of the site":"Ok, Please procced by calling on this mobile number - 7874393483",
    "Can you tel me the procedure of opening the food section":"Yes, Of course, Pls go to the main page and then click the food card",
    "May I know your name":"Yeah my name is Robo",
    "What is your name?":"My name is Robo",
    "What is your name":"My name is Robo",
    "May I know your name?":"My name is Robo",
    "I need some help":"Yeah I am here to help",
    "What can you do":"I can only guide you",
    "What can you do?":"I can only guide you",
    "What you can do???":"I CAN ONLY GUIDE YOU",
    "what is the name of website":"The name of the website is DEMAND",
    "I want some chpis":"Ok, Just go the main page and click on the Food Card",
    "What is the name of the website":"The name of the website is DEMAND",
    "What is the name of Website":"The name of the website is DEMAND",
    "I have a question":"Yeah I can help you",
    "I want some recipies":"ok, GO to the main page and then click on the recipies card",
    "What is the cost of the chips packet":"You can check the cost on the right side of every product",
    "What is the cost of the laptop":"You can check the cost on the right side of every product in electronic section ",
    "What is the cost of iphone 11":"You can check the cost on the right side of every product in electronic section",
    "I want to buy LED":"Ok, Just go to the TECH item card on the main page.",
    "Bye":"Bye and Happy Shopping!!",
    "Bye!!":"Bye and Happy Shopping!!",
    "BYE":"Bye and Happy Shopping!!",
    "Can you take me to the TECH section":"Yes, just go to the main page and click on the tech card",
    "I want to buy mask":"YES, Why not just click on the main page and then click on the mask and sanitizers card",
    "I need some cake":"Ok, just go the Food Section on main page",
    "I want some cake":"Ok, just go the Food Section on main page",
    "Can I buy Laptops from this site":"Why Not! Get as many as you want in the tech section",
    "Can I buy Laptops from this site":"Why Not! Get as many as you want in the tech section",
    "I want to buy Laptops":"Why Not! Get as many as you want in the tech section",
    "I need some Laptops":"Why Not! Get as many as you want in the tech section",
}


function chatbot(){

var input = document.getElementById("input").value;

document.getElementById("text").innerHTML = "<br>";

if(input in userquestion){
document.getElementById("text").innerHTML = userquestion[input] + "<br>";
}

else{
    document.getElementById("text").innerHTML = "It would be byond my abilities at the moment. You can talk to the given mobile number:7874393483";
}

if(input in userquestion){
document.getElementById("text").innerHTML = userquestion[input] + "<br>";
}

else{
    document.getElementById("text").innerHTML = "It would be byond my abilities at the moment. You can talk to the given mobile number:7874393483";
}

}