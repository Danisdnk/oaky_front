import urlWebServices from "./webServices.js";

export const login = async function (login) { //url webservices
    debugger;
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams({ email: login.email, password: login.password })
    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                {
                    //guardo token
                    localStorage.setItem("x", data.jwt);
                    //guardo token

                    //guardo usuario logueado
                    let user = data.data;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("pId", user._id);
                    localStorage.setItem("user", data.data); //revisar esto si quiero pasar el usuario

                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

export const createUser = async function (formValues) { //url webservices
    let url = urlWebServices.createUser;
    const formData = new URLSearchParams({
        name: formValues.name + " " + formValues.lastname,
        email: formValues.email,
        password: formValues.password,
        cellphone: formValues.cellphone,
        documentIdentity: formValues.documentIdentity,
        children: []
    })

    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                {

                    localStorage.clear() // limpio el storage por si acaso
                    //guardo token
                    localStorage.setItem("x", data.jwt);
                    //guardo token

                    //guardo usuario logueado
                    let user = data.data;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("pId", user._id);
                    localStorage.setItem("user", data.data); //revisar esto si quiero pasar el usuario

                    return (data);//correcto
                }


            case 201:
                {

                    localStorage.clear() // limpio el storage por si acaso
                    //guardo token
                    localStorage.setItem("x", data.jwt);
                    //guardo token

                    //guardo usuario logueado
                    let user = data.data;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("pId", user._id);
                    localStorage.setItem("user", data.data); //revisar esto si quiero pasar el usuario

                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}


export const resetPassword = async function (formValues) { //url webservices
    debugger;
    let url = urlWebServices.resetPassword;
    const formData = new URLSearchParams({
        email: formValues.email
    })

    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                {
                    return (data);//correcto
                }


            case 201:
                {
                    localStorage.clear() // limpio el storage por si acaso   

                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

export const verifyResetCode = async function (formValues) { //url webservices

    let url = urlWebServices.verifyResetCode;
    const formData = new URLSearchParams({
        email: formValues.email, password: formValues.code
    })

    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                {
                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}


/**
 * changePassword
 * @param controlValues informacion del control
 * @param url api/control/update/{id}
 * @param method PATCH
*/
export const changePassword = async function (passAndEmail) { //url webservices
    let url = urlWebServices.changePasswordReset;
    const formData = new URLSearchParams({
        email: passAndEmail.email,
        password: passAndEmail.password
    })
    try {
        let response = await fetch(url, {
            method: 'PATCH',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200: return (data);
            default: return (data);
        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

export const findParentId = async function () { //url webservices

    let url = urlWebServices.findParent + localStorage.getItem('pId');

    try {

        let response = await fetch(url, { method: 'GET', mode: "cors" });
        let data = await response.json();

        switch (response.status) {
            case 200:
                return (data.data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

export const findChildByParentId = async function () { //url webservices

    let url = urlWebServices.findChildren + localStorage.getItem('pId');

    try {

        let response = await fetch(url, { method: 'GET', mode: "cors" });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                return (data.data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}


//??-------------------------- CHILD  -------------------------------------

export const createChildren = async function (childValues) { //url webservices
    let url = urlWebServices.createChildren;
    const formData = new URLSearchParams(
        {
            name: childValues.name,
            sex: childValues.sex,
            bornDate: childValues.bornDate,
            bloodType: childValues.bloodType,
            allergies: "alergias",
            diseases: childValues.diseases,
            pediatricControl: [],
            parent_id: (childValues.pId).toString()
        }
    )

    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200:
                {
                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}
export const deleteChild = async (childId) => { //url webservices

    let url = urlWebServices.deleteChildren + childId;

    try {
        let response = await fetch(url, {
            method: 'DELETE',
            mode: "cors",
        });
        let data = await response.json();
        switch (response.status) {
            case 200:
                return (data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

//??-------------------------- VACCINES  -------------------------------------

export const createVaccine = async function (vac) { //url webservices
    let url = urlWebServices.createVaccine;
    const formData = new URLSearchParams(
        {
            name: vac.name,
            applicationDate: vac.applicationDate,
            applicationPlace: vac.applicationPlace,
            tags: vac.tags,
            child_id: vac.id
        }
    )
    try {

        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 201:
                {
                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

export const findVaccineByChild = async function (child) { //url webservices
    debugger
    let url = urlWebServices.findVaccineChild + child
    try {

        let response = await fetch(url, { method: 'GET', mode: "cors" });
        let data = await response.json();

        switch (response.status) {
            case 200:
                return (data.data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

/**
 * updateVaccine
 * @param v representa el objeto 
 * @param url api/vaccines/update/{id vaccine}
 * @param method DELETE
*/
export const updateVaccine = async function (vac) { //url webservices
    debugger
    console.log(vac, "vacunas en controller")
    let url = urlWebServices.updateVaccine + vac.id;
    const formData = new URLSearchParams(
        {
            name: vac.name,
            applicationDate: vac.applicationDate,
            applicationPlace: vac.applicationPlace,
            tags: vac.tags,
            child_id: vac.cId
        }
    )
    try {

        let response = await fetch(url, {
            method: 'PATCH',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 201:
                {
                    return (data);//correcto
                }

            default:
                return (data);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

/**
 * deleteVaccine
 * @param v representa al ID de la vacuna 
 * @param url api/child/delete/{id}
 * @param method DELETE
*/
export const deleteVaccine = async function (v) {
    let url = urlWebServices.deleteVaccine + v;
    try {
        let response = await fetch(url, {
            method: 'DELETE', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        let data = await response.json();

        switch (response.status) {
            case 200:
                return (data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}
//??-------------------------- MEDIC CONTROLS FOR CHILD--------------------------

/**
 * createControl
 * @param controlValues informacion del control
 * @param url api/control/new
 * @param method POST
*/
export const createControl = async function (controlValues) { //url webservices
    let url = urlWebServices.createControl;
    const formData = new URLSearchParams(
        {
            name: controlValues.name,
            date: controlValues.date,
            weight: controlValues.weight,
            height: controlValues.height,
            headDiameter: controlValues.diameterHead,
            medicalStudy: controlValues.medicalStudy,
            controlType: controlValues.controlType,
            result: controlValues.result,
            medicine: controlValues.medicine,
            medicine_comment: controlValues.medicineComment,
            child_id: controlValues.cId
        }
    )
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200: return (data);
            default: return (data);
        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}
/**
 * createControl
 * @param findControlsForChild informacion del control
 * @param url api/control/:id
 * @param method GET
*/
export const findControlsForChild = async function (child) { //url webservices
  debugger
    let url = urlWebServices.findControl + child

    try {

        let response = await fetch(url, { method: 'GET', mode: "cors" });
        let data = await response.json();

        switch (response.status) {
            case 200:
                return (data.data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

/**
 * updateControl
 * @param controlValues informacion del control
 * @param url api/control/update/{id}
 * @param method PATCH
*/
export const updateControl = async function (controlValues) { //url webservices
    let url = urlWebServices.updateControl + controlValues.id;
    debugger;
    const formData = new URLSearchParams(
        {
            id: controlValues.id,
            name: controlValues.name,
            date: controlValues.date,
            weight: controlValues.weight,
            height: controlValues.height,
            headDiameter: controlValues.diameterHead,
            medicalStudy: controlValues.medicalStudy,
            controlType: controlValues.controlType,
            result: controlValues.result,
            medicine: controlValues.medicine,
            medicine_comment: controlValues.medicineComment,
            child_id: controlValues.cId
        }
    )
    try {
        let response = await fetch(url, {
            method: 'PATCH',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });
        let data = await response.json();
        let status = response.status;

        switch (status) {
            case 200: return (data);
            default: return (data);
        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}

/**
 * deleteVaccine
 * @param v representa al ID de la vacuna 
 * @param url api/child/delete/{id}
 * @param method DELETE
*/
export const deleteControl = async function (id) {
    debugger;
    let url = urlWebServices.deleteControl + id;
    try {
        let response = await fetch(url, {
            method: 'DELETE', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        let data = await response.json();

        switch (response.status) {
            case 200: return (data);//correcto

            default:
                return (data.msg);

        }
    } catch {
        return ({ ok: false, msg: "se produjo un error en el sistema" });
    }
}


