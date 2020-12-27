import React, { useEffect, useState } from 'react';
import axios_val from '../axios';
import './banner.component.css'


function Banner({fetchUrl}) {
    const [movies,setMovies] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const request = await axios_val.get(fetchUrl);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length -1 )]);
            return request;
        }

        fetchData();
    },[fetchUrl]);

    function truncate(str, n){
        return (str?.length > n) ? str.substr(0, n-1) + '....' : str;
      };

    return(
        <header className="header" style={{backgroundSize: "cover",backgroundImage: `URL("https://image.tmdb.org/t/p/original/${movies?.poster_path}")`, backgroundPosition: "center center"}}>    
        <div className="banner">
            <h1>{movies?.name || movies?.title}</h1>
            <br/>
            <div className="banner_buttons">
                <button className="button_play">Play</button>
                <button className="button_list">My List</button>
            </div> 
            <h1 className="banner_description">{truncate(movies?.overview,150)}</h1>
        </div>
        <div className="bottom-fade"/>
        </header>
    )
}

export default Banner;