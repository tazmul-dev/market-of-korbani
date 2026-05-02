
export const animals = async()=>{
    const res = await fetch('https://market-of-korbani.vercel.app/animals.json')
    const data = await res.json()
    return data
}