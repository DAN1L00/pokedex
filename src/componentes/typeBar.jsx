import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fet"

export default function TypeBar(){
    const [types,setTypes] = useState([])

    useEffect(() => {
        load()

    },[])

    const load = async () => {
        const tiposAPI = await apiFetch('/type');
        setTypes(tiposAPI.results);
    }
    
    return(
        <div style ={{
            display: "flex"
        }}>
            {

        types.map((type) => {
            return(
                <div key ={type.name}>
        <br />
        <label style={{

                marginRight: 5
            }
            
        }>{type.name}</label>
        
        </div>
     )
    })
}
    </div>
)

}