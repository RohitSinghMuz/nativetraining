import { Token } from "@mui/icons-material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


// signup>>>>>>>>>>>>>>>>

export const signupdata = (emp_id, name, password) => {


    return async (dispatch) => {


        const res = await fetch("https://empappregular.herokuapp.com/signUp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'emp_id': parseInt(emp_id),
                'name': name,
                'password': password,
            })
        })
        const resJson = await res.json()
        dispatch(signupdAction(res.status))

    }


}


export const signupdAction = (status) => {
    return { type: 'REGISTER', payload: status }
}



// Login <------------------------->




export const LoginData = (emp_id, password) => {


    return async (dispatch) => {


        const res = await fetch("https://empappregular.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'emp_id': emp_id,
                'password': password,
            })
        })
        const resJson = await res.json()
        dispatch(loginAction(res.status))
        resJson.token ? sessionStorage.setItem('token', resJson.token) : console.log('token is invalid')


    }


}


export const loginAction = (status) => {
    return { type: 'LOGIN', payload: status }
}

// start Createpost


export const Createpostata = (about, title, subtitle, files) => {


    return async (dispatch) => {
        console.log(sessionStorage.getItem('token'))
        let gettoken = (sessionStorage.getItem('token'))
        console.log(gettoken, 'gettoken')

        var myHeaders = new Headers();
        myHeaders.append("token", gettoken);
        myHeaders.append("Content-Type", "application/json");
        let datarquest = { about, title, subtitle, files }
        var raw = JSON.stringify(datarquest);


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let res = await fetch("https://empappregular.herokuapp.com/createPost", requestOptions)
        let response = res.json()

        dispatch(createpostAction(response.status))

    }


}


export const createpostAction = (status) => {
    return { type: 'CREATEPOST', payload: status }
}



//  start getall post


export const Getallpost = () => {


    return async (dispatch) => {


        const res = await fetch("https://empappregular.herokuapp.com/getAllPosts")
        const response = await res.json()
        console.log(response)
        //   .catch(error => console.log('error', error));
        dispatch(getpostdata(response))
    }


}


export const getpostdata = (payload) => {
    console.log(payload)
    return {
        type: 'GETPOST',
        payload: payload,
    }
}





