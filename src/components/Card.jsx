import "./card.css"

export default function Card(props) {
      
    return (
        <section className="card">
            <div className="card-left">
                <img src={props.img} alt="" />
            </div>
            <div className="card-right">
                <div className="card-header">
                    
                    <div className="card-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>{props.location}</h3>
                        <a className="locationLink" href={props.link}>View on Google Maps</a>
                    </div>
                    
                    <h1>{props.title}</h1>
                </div>
                
                <div className="card-body">
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            
        </section>
        
    )
}