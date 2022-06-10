function populateSecondTextBox() {
    if (chary.checked == true) {
        document.getElementById('txtSecond1').value = document.getElementById('txtFirst1').value;
        document.getElementById('txtSecond2').value = document.getElementById('txtFirst2').value;
        document.getElementById('txtSecond3').value = document.getElementById('txtFirst3').value;
        document.getElementById('txtSecond4').value = document.getElementById('txtFirst4').value;





    } else {
        document.getElementById('txtSecond1').value = "";
        document.getElementById('txtSecond2').value = "";
        document.getElementById('txtSecond3').value = "";
        document.getElementById('txtSecond4').value = "";




    }
}