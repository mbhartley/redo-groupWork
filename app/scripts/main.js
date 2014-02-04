//Registration Form Begins//
$('.registration-form').hide();

$('.reg-tab').click (function(){
	$('.registration-form').toggle();
});

$('.registration-submit').click (function(){
	$('.registration-form').toggle();
})

$('.registration-submit').click(function(){

})

function RegistrationBuild (name, address, city, state, zipCode, email, vehicleYear, vehicleMake, vehicleModel) {
	this.name - name;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
	this.email = email;
	this.vehicleYear = vehicleYear;
	this.vehicleMake = vehicleMake;
	this.vehicleModel = vehicleModel;
}

$('.registration-submit').click(function(){
	var newDiv = $('<div class = "reg-name">' + RegistrationBuild.name + '</div>');
})



 
         
        
