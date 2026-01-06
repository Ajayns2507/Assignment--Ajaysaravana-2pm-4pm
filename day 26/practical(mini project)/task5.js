
async function login (username,password){
    try{
    console.log("Loading....")

    const result = await new Promise((resolve,reject) =>{
        setTimeout(()=> {
            if(username === "ajuu" && password === 558){
                resolve("Login Successfully")
            }else{
                reject("check the User name and Password")
            }
        },2000)
    })

    console.log(result)
    } catch (error){
        console.log(error)
    }
}

login("ajuu",558)
