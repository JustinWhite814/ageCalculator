const date = document.querySelector('#date');
const form = document.getElementById('form');
const checkbox = document.querySelector('#remember');
const date2 = " "; // this empty string can be used for any date that the person who is coding decides to do. The only date must be deleted in order for it to work

// small warning about the functions that I haven't figured out yet, If you arrive on the page and click the checkbox first, your date will not be saved.
// It will only be saved if you put the date in first.
$(function () {
    // this function checks to see if the checkbox is clicked 
    if (localStorage.checkbox && localStorage.checkbox != '') {
        $('#remember').attr('checked', 'checked');
        $('#date').val(localStorage.date);
        
    } else {
        $('#remember').removeAttr('checked');
        $('#date').val('');
    }

    $('#remember').click(function () {

        if ($('#remember').is(':checked')) {
            // this saves the date only after the box is clicked
            localStorage.date = $('#date').val();
            localStorage.checkbox = $('#remember').val();
        } else {
            localStorage.date = ''; // empties the date if the checkbox is unchecked
            localStorage.checkbox = ''; 
        }
    });
});
form.addEventListener('submit', ()=>{
    // this tests the value of the date against the year/month/day that you are legally able to drink in NY
    if(date.value <= "1998-12-09" && date2)
    {
        alert("Welcome To the Pub!!! Please enjoy a free shot on us!!!"); //welcome message if you are old enough
        
    } else {
        alert("Apologies.. Unfortunately you're not quite old enough to hang yet, don't worry though soon!!") // error message that tells you you cant get the free shot
        
    }
 });