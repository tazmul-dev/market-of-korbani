import { animals } from "@/lib/data";



const animalsPage = async() => {
    
    const data = await animals()
    console.log(data)
    
    return (
        <div>
            Animals page
        </div>
    );
};

export default animalsPage
;