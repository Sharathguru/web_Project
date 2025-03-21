// let form =document.getElementById("signup-form")
// console.log(form);

// let username=document.getElementById("username")
// let mail=document.getElementById("mail")
// let password=document.getElementById("password")
// let ConfirmPassword=document.getElementById("ConfirmPassword")



// let emailerror=document.getElementById("emailerror")
// let usernameerror=document.getElementById("usernameerror")
// let passworderror=document.getElementById("passworderror")
// let  confirmpassworderror=document.getElementById("ConfirmPasswordError");

// form.addEventListener("submit",(e)=>
// {
//     e.preventDefault()


//     usernameerror.textContent='';
//     let valid=true;
//     if(username.value.length<3 || !/^[a-zA-Z]+$/.test(username.value))
//     {
//         usernameerror.textContent="Your Charater"
//         usernameerror.style.color="red"
//         usernameerror.style.fontSize="13px"
//         valid=false;
//     }
//     else
//     {
//         usernameerror.textContent=""
//     }
// //     if(!mail.validity.valid)
// //     {
// //         emailerror.textContent = "Enter valid mail";
// //         emailerror.style.color = "red";
// //         // mail.focus();
// //         valid = false; 
// //     }
//         if(!/^[A-Z][a-zA-Z0-9]*[!@#$]/.test(password.value) || password.value.length<6)
//         {
//             passworderror.textContent="You should Use First Letter UpperCase and Special"
//             passworderror.style.color="red"
//         }
//         else
//         {
//             passworderror.textContent=""
//         }

//     if(password.value!==ConfirmPassword.value)
//     {
//         confirmpassworderror.textContent = "Password is not matching";
//         confirmpassworderror.style.color = "red";
//         valid = false; 
//     }


// //     if(valid)
// //     {
// //         let userData={
// //             username:username.value,
// //             mail:mail.value,
// //             password:password.value
// //         }





// //     }
// // localStorage.setItem("signupData", JSON.stringify(userData));
// //     alert("Signup successful! Redirecting to login page...");
//     // form.reset();
// //     window.location.href = "login.html";
// })

