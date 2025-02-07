import React from "react"
import { toast, ToastContainer } from "react-toastify"
class UserComponent extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name," Child  Constructor rendered")
    
    }

    componentDidMount(){
        console.log(this.props.name," Child   Component DId mount excuted ")
    }
    render(){
        console.log(this.props.name," Child   Render excuted ")
        const {name,text,contact,location} = this.props
        return  (
        <div className="grid grid-rows-2 grid-cols-1 place-items-center w-96 h-full rounded-xl shadow-xl m-auto mt-10 p-5">
            <div>
                <h1>Name : {name}</h1>
                <p>{text}</p>
            </div>
            
            <div>
                <h1>Location : {location}</h1>
                <p>Contact : {contact}</p>
            </div>

            <button onClick={()=>{
                toast("Hi ", name)
            }}>
                Get Alert
            </button>
            <ToastContainer />
        </div>
     )}
}

export default UserComponent