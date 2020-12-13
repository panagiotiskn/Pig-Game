function calculation()
{
    var result = "The result is: ";
    var totalBill = document.querySelector("#bill_amount").value;
    var people = document.querySelector("#bill_share").value;
    var analogia = (totalBill/people).toFixed(2);
    result += JSON.stringify(analogia);
    document.querySelector(".result").innerHTML = result;

}

