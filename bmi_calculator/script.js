var cdc = document.querySelector('#cdc')
var result = document.querySelector('#result')
var advice = document.querySelector('#advice')
var bmi_span = document.querySelector('#bmi')

function calculateBMI() {
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;

	var bmi = (weight / (height * height)) * 10000;

	bmi = bmi.toFixed(2);
	bmi_span.innerHTML = bmi;

	if (bmi < 18.5) {
		advice.innerHTML = "You are underweight! <br>Please get more nutrition.";
		bmi_span.style.color = '#ff8c1a';
	}

	if (bmi >= 18.5 && bmi <= 24.99) {
		advice.innerHTML = "Your BMI is normal! <br>Please keep this way.";
		bmi_span.style.color = '#00ff00';
	}

	if (bmi >= 25 && bmi < 30) {
		advice.innerHTML = "You are overweight! <br>Please eat healthy and do more exercise";
		bmi_span.style.color = '#ffcc00';
	}

	if (bmi >= 30) {
		advice.innerHTML = "You are obese! <br>Please get nutritional advice.";
		bmi_span.style.color = '#ff3333';
	}

	//error catching
	if (!isNaN(bmi)) { 
		result.innerHTML = "Your BMI is ";
		result.style.color= 'black';
		result.style.display='inline';

		bmi_span.style.display='inline';
		advice.style.display='block';
		cdc.style.display='block';
	}

	if (isNaN(bmi)) {
		result.style.display='inline';
		result.style.color='#ff8c1a';
		result.innerHTML = "Please insert valid height and weight values"
	}
}