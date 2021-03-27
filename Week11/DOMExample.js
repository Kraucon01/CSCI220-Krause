function checkEmail(){
    var emailName = evl.value;
    if(emailName.length <3){
        evlMsg.className='warning';
        evlMsg.textContent='This is not long enough, yet...';
    }else{
        evlMsg.textContent='';
    }
}

function tipEmail(){
    evlMsg.className = 'tip';
    evlMsg.innerHTML = 'Email must be at least 5 characters long'
}

var evl = document.getElementById('ContactName')
var evlMsg = document.getElementById('messageInfo')

//adding event listeners
evl.addEventListener('focus', tipEmail, false);
evl.addEventListener('blur', checkEmail, false);