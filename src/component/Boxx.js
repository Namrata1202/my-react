import componentsImage from '../assets/book.jpg';
import './Boxx.css';
const Boxx =(props)=>{
    return(
        <div >
            
        <div className="boxx-content">
            <h2>{props.title}</h2>

           
            
            <img className="boxx-img" src={componentsImage} alt="my" />
            <h3>author-   {props.author}</h3>
            <h4> book-Categories  {props.bookC}</h4>
            
            
        {/* <Link to={`/${props.id}`}><p>see more</p></Link> */}
        
        
        </div>
        </div>


    )
}

export default Boxx;