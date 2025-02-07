import { Outlet } from "react-router-dom";
import Head from "./Components/HeadBar";
import RestroCard from "./Components/RestroCard";
import './index.css';
export default function App() {
    
    return (
        <div className=" w-full h-full">
            
            <Head />
            <Outlet />
        </div>
    )
}