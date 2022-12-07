import * as types from './actionTypes'
import axios from 'axios'

const getMenRequest = ( )=>{
    return {
        type:types.GETMEN_REQUEST 
    }
}
const getWomenRequest = ( )=>{
    return {
        type:types.GETWOMEN_REQUEST 
    }
}

export const getMenData = (params)=>(dispatch)=>{
     dispatch(getMenRequest())
     return axios.get("https://mock-json-server-2h17.onrender.com/tgfmensdata",params)
       .then((r)=>{
        return dispatch({
            type:types.GETMEN_SUCCESS,
            payload:r.data
        })
       })
       .catch((e)=>{
        return dispatch({
            type:types.GETMEN_FAILURE,
            payload:e
        })
       })
}
export const getwomenData = (params)=>(dispatch)=>{
    dispatch(getWomenRequest())
    return axios.get("https://mock-json-server-2h17.onrender.com/tgfwomensdata",params)
      .then((r)=>{
       return dispatch({
           type:types.GETWOMEN_SUCCESS,
           payload:r.data
       })
      })
      .catch((e)=>{
       return dispatch({
           type:types.GETWOMEN_FAILURE,
           payload:e
       })
      })
}