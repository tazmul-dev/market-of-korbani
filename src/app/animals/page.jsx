
import AnimalsCard from "@/component/animals/AnimalsCard";






const animalsPage = () => {
 
    return (
        <div className="container mx-auto my-10">
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>High</a></li>
                    <li><a>Low</a></li>
                </ul>
            </div>
            <AnimalsCard></AnimalsCard>
        </div>
    );
};

export default animalsPage
    ;