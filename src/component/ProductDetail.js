import { useParams}  from 'react-router-dom';
const Prodductdetail=()=>{

    const params = useParams();
    return(
        <div>
            <h1>this is product ddetail page</h1>
            <p>{params.id}</p>
        </div>
    )
}

export default Prodductdetail;
