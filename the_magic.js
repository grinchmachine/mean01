const codes = {
    'greenMeanie' : 'almost',
    'Password123' : 'yeh',
    'chrisms' : 'what are you, a hacker? Try harder'
};

function checkPassword() {
    const santa_letter = codes[$('#mailbox').val()];
    $('#message').html(santa_letter ? santa_letter : 'error');
}
