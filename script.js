function compute()
    {
	    var principal =document.getElementById("principal").value;
        
        if (principal <= 0 || principal == "") 
            {
            alert("Enter a positive number")
            document.getElementById("principal").focus()
            return;
            }
	   
        var rate = document.getElementById("rate").value;
	    var years = document.getElementById("years").value;
	    var interest = principal * years * rate / 100;

	    var dtToday = new Date();
	    var futureDate = parseInt(dtToday.getFullYear()) + parseInt(years);

	    var disResult = document.getElementById("result");
        
        disResult.innerHTML = 
           "If you deposit " 
           + "<span class='highlight'>" + principal + "</span>" 
           + ", <br> at an interest rate of " 
           + "<span class='highlight'>" + rate + "</span>%." 
           + " <br> You will receive an amount of "
           + "<span class='highlight'>" + interest + "</span>" 
           + ", <br> in the year " 
           + "<span class='highlight'>" + futureDate + "</span>";
    }

function configRate()
    {
	    var disRate = document.getElementById("rate");
	    var outRate = document.getElementById("disRate");
	    outRate.innerHTML = disRate.value + "%";
    }
