function checkTable() {
  
    var input = document.getElementById("userRow");
    var userColumn = document.getElementById("userColumn");
    var answer;
    var sOption = document.getElementById("sOption").value;
    
    if (input.value != "" && input.value > 0) {
        errorMsg.innerHTML = ""
        table.innerHTML = "";

        if (sOption == "Multiplication") {
            for (var j = 1; j <= userColumn.value; j++) {

                `<tr>
                            
                </tr>`

                for (var i = 1; i  <= input.value; i++) {
                    
                    answer = i * j ;
                    table.innerHTML += 
                    `
                        <td> ${j} * ${i} = ${answer} </td>
                    `
                }

            }
        } 
        
    }
            else {
                table.innerHTML = "";
        
                errorMsg.innerHTML = "If you are not a fool, you will know that empty input cant give answer"
            }

    }