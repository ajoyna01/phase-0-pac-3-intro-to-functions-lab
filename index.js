function shout(string){
    return string.toUpperCase();
    'Hello!'.toUpperCase(); // 'HELLO!'
}
function whisper(string){
    return string.toLowerCase();
    'HELLO'.toLowerCase(); // 'hello'
}
function logShout(string){
    console.log('HELLO');
    'Hello'.toUpperCase(); //  log 'HELLO!'

}
function logWhisper(string){
    console.log('hello');
    'HELLO'.toLowerCase(); // log 'hello'
}
function sayHiToGrandma(string){
    
    if(string.toLowerCase() === string){
        return "I can't hear you!"  
    }   
    else if(string.toUpperCase() === string){
        return "YES INDEED!"
    }
    else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
 }