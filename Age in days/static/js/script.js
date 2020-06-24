function change() {
    var age= document.getElementById('age').value;
    document.getElementById('flex-box-result-1').value = "You are " + (age * 12 * 30 * 24 * 60 * 60)+ "Seconds";
    document.getElementById('flex-box-result-2').value = (age * 12 * 30 * 24 * 60 )+ "Minutes";
    document.getElementById('flex-box-result-3').value = (age * 12 * 30 * 24)+ "Hours";
    document.getElementById('flex-box-result-4').value = (age * 12 * 30)+ "Days";
    document.getElementById('flex-box-result-5').value = (age * 52)+ "Weeks";
    document.getElementById('flex-box-result-6').value = (age * 12)+ "Months old";
}


function reset () {
    document.getElementById('flex-box-result-1')
    document.getElementById('flex-box-result-2')
    document.getElementById('flex-box-result-3')
    document.getElementById('flex-box-result-4')
    document.getElementById('flex-box-result-5')
    document.getElementById('flex-box-result-6')
}