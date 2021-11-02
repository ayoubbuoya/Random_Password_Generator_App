function getPassword() {
    let chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789" ; 
    let passwLength = 16 ; 
    let passw = ""; 
    for (var i = 0; i < passwLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length ) ;
        passw += chars.substring(randomNumber,randomNumber + 1) ;  
    } 
    document.getElementById("password").value = passw;
}
