import Players from './Players'
import PlayersData from './PlayersData'

const PlayerList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {PlayersData.map((player, index) => (
        <Players key={index} {...player} />
      ))}
    </div>
  )
}

export default PlayerList