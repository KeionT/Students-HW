import ScoreTable from "./ScoreTable"

function Student ({name,bio,scores}){
    return(
        <div>
            <h2>{name}</h2>
            <h2>{bio}</h2>
            <ScoreTable scores={scores}/>
        </div>

    )
}
export default Student