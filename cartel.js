var rIndex,
    table = document.getElementById("table");
            
    function checkEmptyInput()
	{
        var isEmpty = false,
            item = document.getElementById("item").value,
            qty = document.getElementById("qty").value,
            amount = document.getElementById("amount").value;
            
            if(item === ""){
                alert("Item Connot Be Empty");
                isEmpty = true;
            }
            else if(qty === ""){
                alert("Quantity Connot Be Empty");
                isEmpty = true;
            }
            else if(amount === ""){
                alert("Amount Connot Be Empty");
                isEmpty = true;
            }
        return isEmpty;
    }
            
            function addHtmlTableRow()
            {
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
					cell4 = newRow.insertCell(3),
                    item = document.getElementById("item").value,
                    qty = document.getElementById("qty").value,
                    amount = document.getElementById("amount").value;
					total = qty*amount;
					
					cell1.innerHTML = item;
					cell2.innerHTML = qty;
					cell3.innerHTML = "&#8369 "+amount+".00";
					cell4.innerHTML = "&#8369 "+total+".00";

					selectedRowToInput();
				}
            }

            function selectedRowToInput()
            {
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      rIndex = this.rowIndex;
                      document.getElementById("item").value = this.cells[0].innerHTML;
                      document.getElementById("qty").value = this.cells[1].innerHTML;
                      document.getElementById("amount").value = this.cells[2].innerHTML;
					  document.getElementById("total").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();
			
			/**
			function editValues()
            {
                var item = document.getElementById("item").value,
                    qty = document.getElementById("qty").value,
                    amount = document.getElementById("amount").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = item;
                table.rows[rIndex].cells[1].innerHTML = qty;
                table.rows[rIndex].cells[2].innerHTML = amount;
              }
            }**/
			
			 function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                document.getElementById("item").value = "";
                document.getElementById("qty").value = "";
                document.getElementById("amount").value = "";
            }
			
			var dt = new Date();
			document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
			
