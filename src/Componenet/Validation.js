export const validateForm = (input)=>{
    const error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;  //[^\s@] means koi b nmbr nd character including '_'
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;  //should 8 char long and should contain atleast 1 number, 1 Small char and 1 capital character.

    if(input.name === ''){
        error.name = "Name is Required"
    }

    if(input.email === ''){
        error.email = "Email is required"
    }
    else if(!email_pattern.test(input.email)){
         error.email = "Please!Enter valid email..."
    }

    if(input.password === ''){
        error.password = "Password is required"
    }
    else if(!password_pattern.test(input.password)){
        error.password = "Password should atleast 8 character long and must be combination of number, small and capital letters"
    }

    return error;
}