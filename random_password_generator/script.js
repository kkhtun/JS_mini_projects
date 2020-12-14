var alertBox = document.querySelector('.alertBox');
alertBox.innerHTML = "Please Click 'Generate Password' button first";

function getPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!A#$%^&*()_+?><:{}[]";
	var passwordLength = 16;
	var password = "";
//Math.random gives random number between 0 and 1 (including 0 but not including 1)
	for (var i=0; i<passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber,randomNumber+1);
	}
	document.getElementById("password").value = password;
	alertBox.innerHTML = "New Password Copied to clipboard! <br>"+ password;
}


function copyPassword() {
	var copyPassText = document.getElementById('password');
	copyPassText.select();
	copyPassText.setSelectionRange(0,9999);
	document.execCommand('copy');
	alertBox.classList.toggle('active');
	setTimeout(function() {
		alertBox.classList.toggle('active');
	}, 1800);
}
