function talk(){
    var know = {
    "who are you" : "Hello,I am a bot how can i help you today ",
"hii":"hii",
"hello" : "hello i am a bot",
    "how are you" : "Good what about you  :)",
    "what can i do for you" : "improve me .",
    "ok" : "Thank You So Much ",
    "bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }