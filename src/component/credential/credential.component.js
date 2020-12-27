import React from 'react';
import './credential.component.css'

function Credential() {
    return (
        <div className="Main_page">
            <header className="Credentials">
                <div class="credential_box">
                    <h1 className="credential_text">Sign up</h1>
                    <br />
                    <form action="http://localhost:3000/login" method="post">
                        <input type="text" className="username" />
                        <input type="password" className="password" />
                        <input type="submit" value="sign in" />
                    </form>
                </div>
            </header>
        </div>
    )
}

export default Credential;