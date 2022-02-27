// import api_users from './../../api/users'
// import { mapState } from 'vuex'


const state = () => ({
    token:null,
    user_info:null
  })

const actions={
    async getAsignatures({commit,rootState}){
        // const state = mapState({
        //     token: state => state.users
        //   })
        console.log('>>',rootState.users)
        //   console.log('STATE',state.token)
        commit
        // console.log('!!!',params)
        // let res = await api_users.authenticateUser(params.username,params.password)
        // console.log('AAA',res)
        // commit('setToken',res.data.access)
    },

    // setToken({commit},token){
    //     commit('setToken',token)
    // },
    // setUserInfo({commit},user_info){
    //     commit('setUserInfo',user_info)
    // }

}

const getters={
    // getUserInfo:(state)=>{
    //     return state.user_info;
    // }
    
}

const mutations={
    // setToken (state,token){
    //     console.log('LALA')
    //     state.token = token
    // },
    // setUserInfo(state,user_info){
    //     state.user_info = user_info
    // }
}



export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations,
    
}