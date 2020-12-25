import React,{useEffect, useState} from 'react';
import axios_val from '../axios';
import './segment.component.css';
//axios_val instead of instance because instance contains only value not like function or object
//so we can give any words for it

function Segment({title, fetchUrl}) {
    const [movies,setMovies] = useState([]);
   const baseURL =  "https://image.tmdb.org/t/p/original";


    useEffect(()=>{
        async function fetchData(){
            const request = await axios_val.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return(
        <div className="segment">
            <h2 style={{color: "white"}}>{title}</h2>
            <div className="segment_rows">
                {movies.map(movie => (
                    <img key={movie.id} className="segment_row" src={`${baseURL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Segment;