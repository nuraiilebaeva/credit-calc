document.addEventListener("DOMContentLoaded", function() {
  const percentInp = document.querySelector("#percent");
  const timeInp = document.querySelector("#inputGroupSelect02");
  const sumInp = document.querySelector("#summ")
  let monthPer = 0;

  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#itog").innerHTML = "";
    document.querySelector("#firstMessage").innerHTML = "";
  })

  document.querySelector("#get").addEventListener("click", () => {
    if(isNaN(sumInp.value) || isNaN(percentInp.value)) return alert("Необходимо вводить только цифры")
    if(!sumInp.value || !timeInp.value || !percentInp.value) return alert("Заполните поля")

    document.querySelector("#itog").innerHTML = "";
    document.querySelector("#firstMessage").innerHTML = ""

    let percent = parseInt(percentInp.value)
    percentInp.value = "";
    let time = parseInt(timeInp.value)
    timeInp.value = "";
    let sum = parseInt(sumInp.value);
    sumInp.value = ""
    let res = 0;
    let ret = 0;
    let message = "Сумма займа:<strong>"+sum+" сомов</strong><br>Годовой процент:<strong>"+percent+"%</strong><br>Срок займа:<strong>" +time+" месяцев</strong><br>";
    document.querySelector("#firstMessage").innerHTML += message;

    for (i = 1; i <= time; i++) {
      monthPer = sum*((percent/12)/100);
      //itog = summ / 12;
      res = Math.round(monthPer * 100) / 100;
      let tr = document.createElement("tr");
      let presentOfMonth = document.createElement("td");
      let monthPay = document.createElement("td");
      let monthNum = document.createElement("td");
      
      monthNum.innerText = i
      presentOfMonth.innerText = `Процент составляет ${res} сом.`
      monthPay.innerText = `Оплата за месяц ${Math.floor(((sum / time) + res) * 100) / 100} сом`

      tr.append(monthNum)
      tr.append(monthPay)
      tr.append(presentOfMonth)
      document.querySelector("#itog").append(tr)
      ret = ret + res;
    }
    ret = Math.round(ret + sum);
    document.querySelector("#itog").innerHTML += "<br> <h3>Итого:"+ret+" сом</h3>";
  })
})