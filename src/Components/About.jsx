import React from 'react'
import UserComponent from '../ClassComponets/UserCalss'
import Example from './ShimmerUI'


class About extends React.Component {

    constructor(props){
        super(props)

        console.log("parent constructer")
    }
    componentDidMount(){
        console.log(" Parnet Componet did mount ")
    }
    render(){
        console.log("Paret Render excuted")
        return(
            (
                <div className='flex justify-ceneter items-center w-full h-full '>
                
                 <UserComponent 
                 name= {"Chandu"}
                 text={"Full Stack Web Devloper"}
                 contact= {"+91 8951657957"}
                 location= {"Bellary, Karnataka "}        
        />
        <UserComponent 
                 name= {"Amrutha"}
                 text={"Full Stack Java Devloper"}
                 contact= {"+91 7676723611"}
                 location= {"Bellary, Karnataka "}        
        />
                </div>
            )       
        )
    }
}

export default About