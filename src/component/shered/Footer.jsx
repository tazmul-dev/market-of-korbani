import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-black text-white p-10 ">
            <div className=" grid sm:grid-cols-3 justify-center items-center gap-4 container mx-auto">
                <div className=" col-span-3sm: col-span-1 ">
                    <h2 className="text-2xl font-bold mb-4">QurbainrHat</h2>
                    <p className="text-sm  leading-6">
                        Your trusted platform for qurbani hat. we will give haldy animals and  we are thees animals feed grash and haldy food. 
                        
                    </p>
                </div>
                <ul className=" sm:ml-20">
                    <li className="font-bold mt-4">Contact us</li>
                   <li><a href="">about</a></li>
                   <li><a href="">Blog</a></li>
                   <li><a href="">Contact</a></li>
                   <li><a href="">Services</a></li>

                </ul>

                    <div>
                        <p className="mb-4 font-bold">Social links</p>
                    <ul className="flex gap-2">
                    
                    <li><a href=""><FaFacebookSquare /></a></li>
                    <li><a href=""></a><FaTwitter /></li>
                    <li><a href=""></a><FaLinkedin /></li>
                </ul>
                    </div>
                
            </div>
        </div>

    );
};

export default Footer;
