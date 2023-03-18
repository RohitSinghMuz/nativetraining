import { signupAction } from "../actions/action"


const initState = {
    data: null,
    logindata: null,
    createpostdata: {

    },
    getpostdata: {},
}

const datareducer = (state = initState, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                data: (state.data, action.payload),

            }
        case 'LOGIN':
            return {
                ...state,
                logindata: { ...state.logindata, ...action.payload },

            }
        case 'CREATEPOST':
            return {
                ...state,
                createpostdata: { ...state.createpostdata, ...action.payload },

            }
        case 'GETPOST':
            return {
                ...state,
                getpostdata:(state.getpostdata,action.payload) ,

            }

        default:
            return state;
    }

}




export const registerdata = (payload) => {
    return {
        type: 'REGISTER',
        payload: payload,

    }
}


export const logindata = (payload) => {
    return {
        type: 'LOGIN',
        payload: payload,

    }
}
export const createpost = (payload) => {
    return {
        type: 'CREATEPOST',
        payload: payload,

    }
}

export const getpost = (payload) => {
    console.log(payload, 'payload')

    return {
        type: 'GETPOST',
        payload: payload,

    }
}






export default datareducer;