  $(function() {
  
    // Setup form validation on the #register-form element
    $("#register").validate({
    
        // Specify the validation rules
        rules: {
            category: "required",
            companyname: "required",
            PhyscalLocation: "required",
            Telephone: "required",
            Website: "required",
            //Confirmpassword:"required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
                      
          
        /* Confirmpassword: {
            required: true,
        equalTo: "#password"*/
        },
        },
        
        // Specify the validation error messages
        messages: {
            category:"Please select a category",
            companyname: "Please enter the company name",
            PhysicalLocation: "Please enter company physical location",
            Telephone:"please enter the phone number",
            Website: "please enter the company webiste",


            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
          Confirmpassword: {
                required: "Please confirm your password",
                equalTo: "Your passwords do not match"
            },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });