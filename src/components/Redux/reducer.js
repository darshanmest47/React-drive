

const initialState = {
    newFile : false,
    
}


const fileReducer =(state=initialState,action)=>{
    switch(action.type){

        case 'NEW_FILE':
            return{
                ...state,
                newFile:true

            }
        case 'CLOSE_FILE':
            return{
                ...state,
                newFile:false
            }

        default:
            return state;
            


    }

}

export default fileReducer;