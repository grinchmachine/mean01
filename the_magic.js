const main_message = 
       'HELP!<br><br>\
        Oh good you got the letter! We didn\'t mean any of it.<br><br>\
        The Grinch has kidnapped us, and he forced us to write that mean letter to you! We hid a secret message in it.<br><br>\
        We are trapped in the Grinch’s lair, he built a christmas ruining robot called M.E.A.N.1.<br><br>\
        The M.E.A.N.1 is keeping us imprisoned and is sending that letter to our loved ones.<br><br>\
        This is a backdoor channel into the M.E.A.N.1, you can destroy the robot and free us but you need the master password.<br><br>\
        We don\'t know what the password is. Maybe you can find it.<br><br>\
        We should have seen this coming. We could swear we have seen him snooping around. We can almost PICTURE him! We caught a glimpse of him but it was just for an instant. He doesn\'t have a gram of decency! But we trust you\'ll be able to hash this out.<br><br>\
        Please help us, Bilbo hasn’t had a treat in 4 hours!<br><br>\
        Hurry,<br>\
        The REAL Jerbo, Ani and Bilbo';
const codes = {
    'greenMeanie' : 'Oh no! It looks like the password has been encrypted! Hurry - it looks like the Grinch got Bilbo!',
    'Password123' : 'yeh',
    'chrisms' : 'what are you, a hacker? Try harder'
};

function flashMsg(status) {
       let msg = status ? 'CORRECT' : 'WRONG PASSWORD, SUCKER!';
       let colour = status ? '#05CB14' : ':#EE0A06';
       $('#status').html(`<span style="color: ${colour}">${msg}</span>`);
       $('#status').fadeIn(20);
       setTimeout(()=>{
              $('#status').fadeOut(1500);
       },5000);
}

function checkPassword() {
       const santa_letter = codes[$('#mailbox').val()];
       console.log('santa_letter:',santa_letter);
       flashMsg(santa_letter);
       $('#message_block').html(santa_letter ? santa_letter : main_message);
       $('#message_block').addClass('typed');
       if(santa_letter == 'greenMeanie') {
              
       } else if (santa_letter == 'Password123') {
              $('#extra').html('<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"></iframe>');
       } else {
              $('#message_block').removeClass('typed');
       }
}
