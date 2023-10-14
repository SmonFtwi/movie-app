import {Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" bg-gray-950  text-white h-screen text-center">
            <h1 className="pt-20">Oh no, this route doesn&apos;t exist!</h1>
            <p  className=" m-5 ">
                <Link
                
                to="/">
                    Click here to go back to the <span 
                    className="underline">home page </span></Link>
            </p>
        </div>
    );
};

export default ErrorPage;