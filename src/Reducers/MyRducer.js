const MyRducer = (state, action)=>{
    switch(action.type){
        case '+':
            return state+1;
        case '-':
            return state-1;
            default:
      throw new Error();
    }

}
export default MyRducer;