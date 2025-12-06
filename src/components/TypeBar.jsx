import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fetch"

export default function Typebar({ setType }) {
    const [types, setTypes] = useState([])

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const tiposAPI = await apiFetch('/type');
        setTypes(tiposAPI.results);
    }

    const click = (tipoClicado) => {
        setType(tipoClicado);
    }

    return (
        <div style={{
            display: "flex"
        }}>
            {
                types.map((tipoCorrenteDoFor) => {
                    return (
                        <div
                            key={tipoCorrenteDoFor.name}>
                            <br />
                            <button
                                onClick={()=>click(tipoCorrenteDoFor.name)}
                                style={{
                                    marginRight: 5
                                }}>
                                {tipoCorrenteDoFor.name}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}