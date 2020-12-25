import React from 'react';
import Segment from './segment.component';
import requests from '../request';
import Banner from './banner.component';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner fetchUrl={requests.fetchNetflixOriginals}/>
                <br/>
                <Segment title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
                <Segment title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Segment title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Segment title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Segment title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Segment title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Segment title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Segment title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
        )
    }
}

export default Home;