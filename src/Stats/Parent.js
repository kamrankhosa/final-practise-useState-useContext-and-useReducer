import Child from "./Child";

function Parent(props){
    return(
        <div>
      We are on parent page 
      <Child value={props.value}></Child>
        </div>
    )

}
export default Parent;