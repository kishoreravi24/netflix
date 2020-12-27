import React from 'react';
import './start.component.css';

function MainPage() {
    function user_play() {
        console.log(window.location.href)
        let new_url = window.location.href;
        new_url = new_url + 'login'
        window.location.href = new_url;
    }

    return (
        <div className="Header_App">
            <header className="Header_mainPage">
                <div className="Header">
                    <ul>
                        <li style={{ color: "white" }}><img className="Header_img" src="https://i.redd.it/eswpfqzzcx931.jpg" alt="Netflix" /></li>
                        <li style={{ color: "white", float: "right", marginRight: "20px" }}><button className="button_call" onClick={user_play}>Sign In</button></li>
                    </ul>
                    <br/>
                    <div className="Header_text">
                        <h1>Unlimited movies, TV</h1>
                    </div>
                    <h3 className="Header_text_member">Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <div className="Header_fade" />
            </header>
            <br />
            <div className="Header_tv">
                <p className="Header_tv_text">Enjoy on your TV.</p>
                <p className="Header_tv_text1">Watch on smart TVs, playstation, xbox and more</p>
                <video className="Header_tv_video" autoplay="autoplay" muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
            </div>
            {/* <div className="Header_offline">
                <img className="Header_offline_img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="netflix_offline"/>
                <h1 className="Header_offline_text">Download your shows to watch offline</h1>
            </div> */}
        </div>
    )
}

export default MainPage;