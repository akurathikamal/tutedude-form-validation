var emailMessage = "";
var emptyEmailMessage = "";
var phoneMessage = "";
var emptyPhoneMessage = "";
var passwordMessage = "";
var emptyPasswordMessage = "";
var cpasswordMessage = "";
var emptyCpasswordMessage = "";

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhoneno(number) {
    var regexphone = /^\d{10}$/; // 10 digit phone number
    return regexphone.test(number);
}

function isStrongPassword(password) {
    // At least 8 chars, one uppercase, one lowercase, one number
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
    return regex.test(password);
}

$("#submit").click(function () {
    // Reset messages
    emailMessage = "";
    emptyEmailMessage = "";
    phoneMessage = "";
    emptyPhoneMessage = "";
    passwordMessage = "";
    emptyPasswordMessage = "";
    cpasswordMessage = "";
    emptyCpasswordMessage = "";

    // Email
    if ($("#Email").val() == "") {
        emptyEmailMessage = "fill the email";
    } else if (!isEmail($("#Email").val())) {
        emailMessage = "check your email again";
    }

    // Phone
    if ($("#number").val() == "") {
        emptyPhoneMessage = "fill the number";
    } else if (!isPhoneno($("#number").val())) {
        phoneMessage = "check your phone number again";
    }

    // Password
    if ($("#password").val() == "") {
        emptyPasswordMessage = "fill the password";
    } else if (!isStrongPassword($("#password").val())) {
        passwordMessage = "Password must be at least 8 characters and Atmost 15 characters, include uppercase, lowercase, a number, and a special character";
    }

    // Confirm Password
    if ($("#confirmpassword").val() == "") {
        emptyCpasswordMessage = "please enter the confirm password";
    } else if ($("#password").val() != $("#confirmpassword").val()) {
        cpasswordMessage = "passwords do not match";
    }

        $("#showPassword").on("change", function () {
        var type = $(this).is(":checked") ? "text" : "password";
        $("#password").attr("type", type);
    });
    $("#showConfirmPassword").on("change", function () {
        var type = $(this).is(":checked") ? "text" : "password";
        $("#confirmpassword").attr("type", type);
    });

    // Show messages
    $("#emailtext").html(emailMessage).css({ "text-align": "center", "background-color": "red" });
    $("#emptyemailtext").html(emptyEmailMessage).css({ "text-align": "center", "background-color": "red" });
    $("#phnotext").html(phoneMessage).css({ "text-align": "center", "background-color": "red" });
    $("#emptyphnotext").html(emptyPhoneMessage).css({ "text-align": "center", "background-color": "red" });
    $("#passwordtext").html(passwordMessage).css({ "text-align": "center", "background-color": "red" });
    $("#emptypasswordtext").html(emptyPasswordMessage).css({ "text-align": "center", "background-color": "red" });
    $("#cpasswordtext").html(cpasswordMessage).css({ "text-align": "center", "background-color": "red" });
    $("#emptycpasswordtext").html(emptyCpasswordMessage).css({ "text-align": "center", "background-color": "red" });


    // Success
    if (
        emptyEmailMessage === "" &&
        emptyPhoneMessage === "" &&
        emptyPasswordMessage === "" &&
        emptyCpasswordMessage === "" &&
        emailMessage === "" &&
        phoneMessage === "" &&
        passwordMessage === "" &&
        cpasswordMessage === ""
    ) {
        $("#sucessfullyregistered").html("Successfully registered!").css({ "text-align": "center", "background-color": "lightgreen" });
        $("#Email").val("");
        $("#number").val("");
        $("#password").val("");
        $("#confirmpassword").val("");
      } else {
        $("#sucessfullyregistered").html("");
    }
    $("input").on("input", function () {
    $("#emailtext, #emptyemailtext, #phnotext, #emptyphnotext, #passwordtext, #emptypasswordtext, #cpasswordtext, #emptycpasswordtext, #sucessfullyregistered").html("").css("background-color", "");
})
});