export const validate = (data,type) => {

    const error = {}

    if (!data.email) {
        error.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        error.email = "Email address is invalid"
    }else{
        delete error.email
    }


    if (!data.password) {
        error.password = "Password required"
    }else if (data.password.length < 6) {
        error.password = "Password need to 6 charactor or more"
    }else{
        delete error.password
    }


   
    if (type === "signup") {
        
        if (!data.name.trim()){
            error.name = "Name required"
        }else{
            delete error.name
        }


        if (!data.confirmPassword) {
            error.confirmPassword = "ConfirmPassword required"
        }else if (data.confirmPassword !== data.password) {
            error.confirmPassword = "Password do not match"
        }else{
            delete error.confirmPassword
        }
    
    
        if(data.isAccepted){
            delete error.isAccepted
        }else{
            error.isAccepted = "Accept our regulations"
        }
    }

    return error
}