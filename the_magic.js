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
    'greenmeanie' : 'Oh no! It looks like the password has been encrypted! Hurry - the Grinch took Bilbo!',
    'password123' : 'You did it!',
    'chrisms' : 'What are you, a hacker? Try harder'
};

function flashMsg(status) {
       let msg = status ? 'CORRECT' : 'WRONG PASSWORD, SUCKER!';
       let colour = status ? '#05CB14' : '#EE0A06';
       $('#status').html(`<span style="color: ${colour}">${msg}</span>`);
       $('#status').fadeIn(20);
       setTimeout(()=>{
              $('#status').fadeOut(1500);
       },5000);
}

function checkPassword() {
       const response = $('#mailbox').val().trim().toLowerCase();
       const santa_letter = codes[response];
       flashMsg(santa_letter);
       $('#message_block').html(santa_letter ? santa_letter : main_message);
       $('#message_block').addClass('typed');
       if(response == 'greenmeanie') {
              alert('greenmeanie');
              setTimeout(()=> {
                     $('#extra_border').fadeIn(20);
                     $('#extra').html('<p style="text-align:center">Solve the puzzle to decrypt the password</p><div style="display:inline-block;text-align:left;width:300px;"><a style="color:#444" href="https://www.jigidi.com/solve/azs8pria/m-e-a-n-01-encryption/?utm_source=em">M.E.A.N.01 Encryption<img style="display:block;border:none;margin:5px 0 0 0;" src="//thumbs.jigidi.com/embed.php?t=m_AZS8PRIA_77" alt="Jigsaw puzzle - M.E.A.N.01 Encryption"></a></div>');
              }, 6610);
       } else if (response == 'password123') {
              alert('password123_debug');
              $('.typed').css("width","12.5%");
              $('#extra_border').fadeIn(20);
              $('#extra').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/dJwSjrIFw8U?autoplay=1&cc_load_policy=1&rel=0&showinfo=0" title="You Did It!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
       } else {
              alert('not the right answer');
              $('.typed').css("width","100%");
              $('#extra_border').fadeOut(20);
              $('#message_block').removeClass('typed');
       }
}
