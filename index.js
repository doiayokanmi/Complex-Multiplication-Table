function checkTable() {
    var input = document.getElementById("userRow");
    var userColumn = document.getElementById("userColumn");
    var answer;
    var sOption = document.getElementById("sOption").value;
    var tableHTML = "";
  
    if (input.value != "" && input.value > 0 && userColumn.value != "" && userColumn.value > 0) {
      errorMsg.innerHTML = "";
      table.innerHTML = "";
  
      if (sOption == "Multiplication") {
        for (var i = 1; i <= userColumn.value; i++) {
          tableHTML += "<tr>";
  
          for (var j = 1; j <= input.value; j++) {
            answer = i * j;
            tableHTML += `<td>${i} * ${j} = ${answer}</td>`;
          }
  
          tableHTML += "</tr>";
        }
  
        table.innerHTML = tableHTML;
      } else if (sOption == "Addition") {
        for (var i = 1; i <= userColumn.value; i++) {
          tableHTML += "<tr>";
  
          for (var j = 1; j <= input.value; j++) {
            answer = i + j;
            tableHTML += `<td>${i} + ${j} = ${answer}</td>`;
          }
  
          tableHTML += "</tr>";
        }
  
        table.innerHTML = tableHTML;
      } else if (sOption == "Division") {
        for (var i = 1; i <= userColumn.value; i++) {
          tableHTML += "<tr>";
  
          for (var j = 1; j <= input.value; j++) {
            answer = i / j;
            answer = answer.toFixed(2);
            tableHTML += `<td>${i} / ${j} = ${answer}</td>`;
          }
  
          tableHTML += "</tr>";
        }
  
        table.innerHTML = tableHTML;
      } else if (sOption == "Subtraction") {
        for (var i = 1; i <= userColumn.value; i++) {
          tableHTML += "<tr>";
  
          for (var j = 1; j <= input.value; j++) {
            answer = i - j;
            tableHTML += `<td>${i} - ${j} = ${answer}</td>`;
          }
  
          tableHTML += "</tr>";
        }
  
        table.innerHTML = tableHTML;
      } else {
        for (var i = 1; i <= userColumn.value; i++) {
          tableHTML += "<tr>";
  
          for (var j = 1; j <= input.value; j++) {
            answer = i % j;
            tableHTML += `<td>${i} mod ${j} = ${answer}</td>`;
          }
  
          tableHTML += "</tr>";
        }
  
        table.innerHTML = tableHTML;
      }

    } else {
      table.innerHTML = "";
      errorMsg.innerHTML = "If you are not a fool, you will know that empty input cant give answer";
    }
  }
  