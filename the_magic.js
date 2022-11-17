const main_message = 
       'HELP!\n\
        Oh good you got the letter! We didn\'t mean any of it.\n\
        The Grinch has kidnapped us, and he forced us to write that mean letter to you! We hid a secret message in it.\n\
        We are trapped in the Grinch’s lair, he built a christmas ruining robot called M.E.A.N.1.\n\
        The M.E.A.N.1 is keeping us imprisoned and is sending that letter to our loved ones.\n\
        This is a backdoor channel into the M.E.A.N.1, you can destroy the robot and free us but you need the master password.\n\
        We don\'t know what the password is. Maybe you can find it.\n\
        We should have seen this coming. We could swear we have seen him snooping around. We can almost PICTURE him! We caught a glimpse of him but it was just for an instant. He doesn\'t have a gram of decency! But we trust you\'ll be able to hash this out.\n\
        Please help us, Bilbo hasn\’t had a treat in 4 hours!\n\
        Hurry,\n\
        The REAL Jerbo, Ani and Bilbo';
const codes = {
    'greenMeanie' : 'almost',
    'Password123' : 'yeh',
    'chrisms' : 'what are you, a hacker? Try harder'
};

function checkPassword() {
    const santa_letter = codes[$('#mailbox').val()];
    if(!santa_letter) {
        $('#status').html('<em style="color:#EE0A06">Incorrect</em>');
        $('#status').fadeIn(20);
        $('#status').fadeOut(500);
        $('#status').fadeIn(500);
    } else {
        $('#status').html('<em style="color:#EE0A06">Correct</em>');
        $('#status').fadeIn(20);
        $('#status').fadeOut(500);
        $('#status').fadeIn(500);
    }
    $('#message').html(santa_letter ? santa_letter : 'error');
}
