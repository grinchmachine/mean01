function checkPassword() {
    const codes = {
        'greenMeanie' : 'almost',
        'Password123' : 'yeh'
        'chrisms' : 'what are you, a hacker? Try harder'
    };
    
    const santa_letter = codes[$('#mailbox').val()];
    $('#message').val(santa_letter ? santa_letter : 'error');
}
