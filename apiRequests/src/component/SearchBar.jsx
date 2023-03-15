import {useState} from "react"
function SearchBar({onSubmit}){
    const [term, setTerm] = useState('')
    // 
    const handledformsubmit =(e)=>{
        e.preventDefault();
        onSubmit("crs");
    }

    const handleChange =(event)=>{
        setTerm(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handledformsubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}
export default SearchBar