let initialState={
    username:'',
    id:0,
    profile_pic:''
}

const SOME_ACTION='SOME_ACTION'

export function someAction(id,username,profile_pic){
    return {
        type:SOME_ACTION,
        payload:{id, username,profile_pic}
    }
}
export default function reducer(state=initialState,action){
    console.log('REDUCER HIT: Action ->', action );
    switch(action.type){
        case SOME_ACTION:
        return Object.assign({},state,{username:action.payload.username, id:action.payload.id, profile_pic:action.payload.profile_pic})

        default: return state;
        
    }

}