function Calc() {
    num_1 = parseInt(document.getElementById('first').value);
    num_2 = parseInt(document.getElementById('second').value);
    operator = document.getElementById('action').value;
    if (isFinite(num_1) === true && isFinite(num_2) === true) {
        switch (operator) {
            case "+":
                document.getElementById('result').value = num_1 + num_2;
                break;
            case "-":
                document.getElementById('result').value = num_1 - num_2;
                break;
            case "*":
                document.getElementById('result').value = num_1 * num_2;
                break;
            case "/":
                document.getElementById('result').value = num_1 / num_2;
                break;
            default:
                document.getElementById('result').value = "Ждём ввода";
                break;
        }
    } else {
        document.getElementById('result').value = "Ждём ввода";
    }
}
