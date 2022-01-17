import Score from "./Score"

function ScoreTable({scores}) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map(score =>{
                    return <Score date={score.date} score={score.score} key={score.date}/>
                })}
            </tbody>
        </table>
    )
    
}
export default ScoreTable