window.onload = function(){
    //Create image element for side panel
    var fou = document.createElement("img");
    var fouimg = "./Fou.jpg"; /*Relative pathname to the image*/
    fou.setAttribute('src', fouimg); /*Set source of image*/
    fou.setAttribute('alt', 'fou'); /*Set alternate name for image if it fails to load as part of good programming practice*/
    fou.setAttribute('height', 200); /*Set height of image to 200px*/
    fou.setAttribute('width', 198); /*Set width of image to 200px*/
    document.querySelector("#Fou").appendChild(fou); /* Reference to the div id and append the image element to it */

    //Create textnode for side panel
    var foutext = document.createElement("p");
    var foutext2 = document.createTextNode("Hi, I'm Fou. Kevin's little guardian on his site. Kevin says that the site works best on Chrome at 100% zoom maximize and Firefox at 100% zoom. Chrome is much preferred because the footer lines up better. Please do not click me or I will transform into something monstrous");
    foutext.appendChild(foutext2);
    document.querySelector("#NormalFou").appendChild(foutext); /*Append the text to the parent element*/

    /*Create new element to trigger on click event*/
    var spookywarning = document.querySelector("#Fou");

    /*Function:
    Change my webpage's guardian to something spooky on click*/
    spookywarning.onclick = function()
    {
    var fouremove = document.querySelector("#Fou");
    fouremove.remove(); /*Append the remove function to remove the old image in the side panel*/

    var removefoutext = document.querySelector("#NormalFou");
    removefoutext.remove(); /*Append the remove function to remove the old text in the side panel*/
    
    /*Create a new image element to replace the recently removed image */
    var spookyfou = document.createElement("img");
    var spookyfouimg = "./spookyfou.png";
    spookyfou.setAttribute('src', spookyfouimg);
    spookyfou.setAttribute('alt', 'Spooky Fou');
    spookyfou.setAttribute('height', 200);
    spookyfou.setAttribute('width', 198);
    document.querySelector("#SpookyFou").appendChild(spookyfou);

    /*Create a new text node element to replace the recently removed text*/
    var spookfoutext = document.createElement("p");
    var spookyfoutext = document.createTextNode("I warned you not to click on me. Now you will have to deal with me staring deep into your soul the entire time till you either refresh the page or go to another page");
    spookfoutext.appendChild(spookyfoutext);
    document.querySelector("#SpookyFouTalking").appendChild(spookfoutext);
    }

}

//Validation functions

//Overall validation function when user presses submit
function validateform()
{
return validateFName() && validateLName() && passwordval() && passwordMatch() && usernamevalid();
}

//Validate first name
function validateFName()
{
    var FName = document.querySelector("#firstname").value; //Reference to firstname on form and take the value
    FName = FName.trim(); //Eliminate any trails or spaces
    var numofnonalphas = 0;

    //Error messages to send
    var notalphabets = "<p> - Please enter only alphabetical letters for first name </p>";
    var notcapitalstart = "<p> - Please begin the first name with a capital </p>";

    //Initial check to see if the entered name's first character is a capital or not
    if((FName.charCodeAt(0) <= 64) || (FName.charCodeAt(0) >= 91))
    {
        printErrors(notcapitalstart);
        return false;
    }

    //Check each character in the string
    for (var i = 0; i < FName.length; i++)
    {
        //Use the ASCII values to determine what is alphabetical and what is not
        if((FName.charCodeAt(i) <= 64) || (91 <= FName.charCodeAt(i) <= 96) && (FName.charCodeAt(i) >= 122))
        {
            numofnonalphas++; //Increase the count of non alphabetical chars
        }
    }

    //If the loop running earlier has detected even one non-alphabetical value then return false
    if (numofnonalphas > 0)
    {
        printErrors(notalphabets);
        return false;
    }

    //Return true if none of the conditions are met
    return true;
}

//Validate last name
function validateLName()
{
    var LName = document.querySelector("#lastname").value; //Reference to lastname on form and take the value
    LName = LName.trim();
    var numofnonalphas2 = 0;

    //Error messages to send
    var notalphabets2 = "<p> - Please enter only alphabetical letters for last name </p>";
    var notcapitalstart2 = "<p> - Please begin the last name with a capital </p>";

    //Initial check to see if the entered name's first character is a capital or not
    if((LName.charCodeAt(0) <= 64) || (LName.charCodeAt(0) >= 91))
    {
        printErrors(notcapitalstart2);
        return false;
    }

    //Check each character in the string
    for (var i = 0; i < LName.length; i++)
    {
        //Use the ASCII values to determine what is alphabetical and what is not
        if((LName.charCodeAt(i) <= 64) || (91 <= LName.charCodeAt(i) <= 96) && (LName.charCodeAt(i) >= 122))
        {
            numofnonalphas2++; //Increase the count of non alphabet values
        }
    }

    //If the loop running earlier has detected even one non-alphabetical value then return false
    if (numofnonalphas2 > 0)
    {
        printErrors(notalphabets2);
        return false;
    }

    //Return true if none of the conditions are met
    return true;
}

//Function to validate the strings matching in password and confirm password
function passwordMatch()
{
    //Receive values of the passwords via reference to id
    var password = document.querySelector("#passwordfield").value;
    var confirmpassword = document.querySelector("#confirmpass").value;

    //Error messages
    var nomatch = "<p> - Passwords do not match </p>";

    //Use string compare method to see if the strings have any differences
    var comp = confirmpassword.localeCompare(password);

    //If there are differences then set condition to false and do not submit
    if (comp != 0)
    {
        printErrors(nomatch);
        return false;
    }

    return true;
}

//Function to validate the password entered
function passwordval()
{
    var password = document.querySelector("#passwordfield").value;
    var notenoughchars = "<p> - Please enter a password that is 6 characters long </p>";
    var alphastart = "<p> - Password must begin with an alphabet </p>";
    var mixture = "<p> - Password must contain at least one uppercase letter and one digit </p>";
    var passwordlength = password.length;
    var cap = 0; //Variable to hold the uppercase letter count
    var digit = 0; //Variable to hold the digit count

    //Condition where the password length must be 6 characters or longer precedes the other conditions
    if (passwordlength < 6)
    {
        printErrors(notenoughchars);
        return false;
    }

    //Check if the first character of the password is an alphabet
    if ((password.charCodeAt(0) <= 64) || (91 <= password.charCodeAt(0) <= 96) && (password.charCodeAt(0) >= 122))
    {
        printErrors(alphastart);
        return false;
    }

    //Go through the entire password value
    for (var j = 0; j < passwordlength; j++)
    {
        //Check if it is uppercase or not via ASCII table
        if ((password.charCodeAt(j) >= 65) && (password.charCodeAt(j) <= 90)) 
        {
            cap++;
        }
        //Check if it is a digit or not
        if ((password.charCodeAt(j) >= 48) && (password.charCodeAt(j) <= 57)) 
        {
            digit++;
        }
    }

    //If the counts are not both at 1
    if ((cap < 1) || (digit < 1))
    {
        printErrors(mixture);
        return false;
    }

    return true;
}

//Validate username is six chars or not
function usernamevalid()
{
    var username = document.querySelector("#usernamef2").value;
    var notlongenough = "<p> - Username must be at least 6 characters long </p>";
    var usernamelong = username.length;

    if (usernamelong < 6)
    {
        printErrors(notlongenough);
        return false;
    }
    return true;
}

//Function to print the error messages on the text box
function printErrors(msg)
{
    document.querySelector("#errorbox").innerHTML += msg;
}

//Function to clear out all error messages when the reset button is pressed
function cleanup()
{
    document.querySelector("#errorbox").innerHTML = "";
}