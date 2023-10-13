import {  HeartStraight, MonitorPlay } from "phosphor-react";
import { useNavigate } from "react-router-dom";

function Header () {
    const navigate = useNavigate();
    return (
    <>
    <div className="bg-gradient-to-r from-blue-950 to-cyan-950  flex p-5 shadow-md font-serif text-white">
        
        <h1 className=" text-2xl font-bold flex cursor-pointer flex-auto w-72"><MonitorPlay size={36} />SMovies</h1>
        <div className=" flex flex-auto w-32  justify-around">
        <ul className=" flex gap-5 text-lg md:ml-16">
           <li className=" cursor-pointer hover:underline underline-offset-8 " onClick={() => {navigate('/')}}>Home</li>
           <li className=" cursor-pointer hover:underline underline-offset-8" onClick={() => {navigate('/movies')}}>Movies</li>
           <li className=" cursor-pointer hover:underline underline-offset-8" onClick={() => {navigate('/tvShow')}}>Tv Show</li>
        </ul>
        <HeartStraight size={36} 
         className=" text-white align-bottom ml-6 cursor-pointer "
         //onClick={() => {navigate('/likedVideo')}}
        />
        </div>
    </div>
    </>
    )
}

export default Header;