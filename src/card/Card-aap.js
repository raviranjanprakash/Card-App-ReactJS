
function Card(props){
  return(
    <div className="card">
      <img src={props.carsrc} alt="Mypic" />
      <div className="container">
        <h4 className='name'>{props.cardname}</h4>
        <a href={props.cardlink} className='dgnation' target="_blank">Watch Cash</a>
      </div>
    </div>
  )
}

export default Card;