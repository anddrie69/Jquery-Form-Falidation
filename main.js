jQuery(document).ready(function() {
jQuery('#fullname').on('focusout', function(event){
var fullname = jQuery('#fullname');
if( fullname.val() === '' ){
fullname.addClass('required');
} else {
fullname.removeClass('required');
}
});
 
 
jQuery('#email').on('focusout', function(event){
var email = jQuery('#email');
var vEmail = email.val();
var cEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
if( vEmail === '' ){
email.addClass('required');
} else if( !cEmail.test(vEmail) ){
email.removeClass('required');
email.addClass('error-email');
} else {
email.removeClass('required error-email');
}
});
jQuery("#form-message").click( function(e) {
e.preventDefault();
var post_data = jQuery('#message-form').serialize();
var form_action = 'mailing.php';
var form_method = jQuery('#message-form').attr("method");
var fullname = jQuery('#fullname');
var email = jQuery('#email');
if( fullname.val() !== '' && email.val() !== '' ){
$.ajax({
type: form_method,
url: form_action,
cache: false,
data: post_data,
success: function(response) {
jQuery('#response').html(response);
},
error: function(response) {
jQuery('#response').html('<span class="error">Data Couldn\'t sending to server. Please try again!</span>');
}
});
} else {
jQuery('#response').html('<span class="error">Please Fill all field to Submit data!</span>');
if(fullname.val() === ''){
fullname.addClass('required');
}
if(email.val() === ''){
email.addClass('required');
}
}
});
});
