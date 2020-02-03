//hide the order message when the webpage initially loads
$('.message').hide();

//Determines actions taken on the click of the order button
$("#orderButton").click(function(){
    var textFromArea = $('textarea').val()
    input = textFromArea.toLowerCase()
    //This If/else statement looks for the 'vegan' substring in the text box and warns the 
    //user if 'vegan' is detected. All text is set to lowercase to make the comparison.
    if (input.indexOf("vegan") >= 0){
        alert("Cheesecake has cheese in it. Cheese contains dairy and is not vegan.");
    }
    else{
        //Toggle elements that are intended to disappear when the order button is submitted
        $("select").toggle();
        $("table").toggle();
        $("td").toggle();
        $("tr").toggle();
        $("textarea").toggle();
        // Declare variables from which user input will be extracted (Radio buttons & TextArea)
        var topping = ""
        var radioButtons = document.getElementsByTagName('input')
        //This loop determines which radio button is selected
        for(i=0;i<radioButtons.length; i++){
            if(radioButtons[i].type=="radio"){
                if(radioButtons[i].checked){
                    //this formats the proper submission message
                    document.getElementById("orderMsg").innerHTML += "You have ordered " 
                    + $("#quantitySelect option:selected").text() + " cheesecake(s) with " 
                    + radioButtons[i].value + " topping(s).";
                    document.getElementById("orderNotes").innerHTML += "Your note was: \" "
                    + textFromArea + " \" " 
                    break;
                }
            }
        }
        //display the submission message
        $('.message').toggle();
    } 
});

