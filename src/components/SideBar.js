import React from 'react';

export default class SideBar extends React.Component {
    render () {
        return (
            <div class= "sidebar">
                <div class= "represent">
                    <img src="nero.png" alt="Picture" width="256" height="256"/>
                    <h1>Alexis Garcia</h1>
                    <p>
                        <img id="email" width="25" height="25"
                         src="email.png"/> alexisgarc711@gmail.com
                    </p>
                </div>
                <div class= "links">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Hobbies">Hobbies</a>
                </div>
                <div class= "social">
                    <a href="https://www.linkedin.com/in/alexisgarc711/">
                        <img width="32" height="32" src="linkedin.png"/>
                    </a>
                    <a href="https://github.com/luckstrike/">
                        <img width="32" height="32" src="github.png"/>
                    </a>
                </div>
            </div>
        )
    }
}