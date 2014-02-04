//Registration Form Begins//
$('.registrationForm').hide();

$('.reg-tab').click (function(){
	$('.registrationForm').toggle();
});

$('.submit-button').click (function(){
	$('.registrationForm').toggle();
})

var regForm = $('form').serializeArray();

regForm.forEach(function(name){
	var addRegistration = $('<div class ="reg-name">' + regForm.name + '</div>')
	$('body').append(addRegistration);
})

 
       
        
