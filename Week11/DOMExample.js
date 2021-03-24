function checkEmail(){
    var emailName = evl.value;
    if(emailName.length <3){
        evlMsg.className=''
    }

}


var evl = document.getElementById('ContactName')
var evlMsg = document.getElementById('messageInfo')

//adding event listeners
evl.addEventListener('focus', )