export default function PokemonCard({pokemon}){
    

    return (
        <div style={{
            
        }}>

            
        <>
        <img src = {pokemon.imgSrc} height={100}></img>       
        <label style={{marginRight: 5}} >{pokemon.name}</label>
     
        </>
        </div>
        
    )
}