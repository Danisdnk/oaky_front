const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url", urlApi);

const urlWebServices = {
  
    //AUTH
    login: urlApi + "api/auth/login",//POST 
    findParent: urlApi + "api/auth/findparentid/",//GET
    createUser: urlApi + "api/auth/new", //POST
   
   //CHANGE PASSWORD
    resetPassword: urlApi + "api/auth/resetpassword", //POST
    verifyResetCode: urlApi + "api/auth/resetcode", //GET
    changePasswordReset: urlApi + "api/auth/updatepassword", //PATCH
  
    //CHILDREN
    findChildren: urlApi + "api/child/findchild/",//GET
    createChildren: urlApi + "api/child/new", //POST
    deleteChildren: urlApi + "api/child/deletechild/", //DELETE

    //CONTROLS
    findControl: urlApi + "api/control/findcontrol/",//GET
    createControl: urlApi + "api/control/new", //POST
    updateControl: urlApi + "api/control/update/", //PATCH
    deleteControl: urlApi + "api/control/delete/", //DELETE

    //VACCINES
    findVaccineChild: urlApi + "api/vaccines/find/",//GET
    createVaccine: urlApi + "api/vaccines/new", //POST
    updateVaccine: urlApi + "api/vaccines/update/", //PUR
    deleteVaccine: urlApi + "api/vaccines/delete/", //DELETE
}

export default urlWebServices;