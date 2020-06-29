import React from 'react';

export default class SideBar extends React.Component {
    render () {
        return (
            <div class= "sidebar">
                <div class= "represent">
                    <img id="picture" src="nero.png" alt="Picture" width="256" height="256"/>
                    <h1>Alexis Garcia</h1>
                    <div><img width="25" height="25"src="email.png"/> alexisgarc711@gmail.com</div>
                    <div><img width="30" height="40"src="college.png"/> Texas A&M University</div>
                </div>
                <div class= "links">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Hobbies">Hobbies</a>
                </div>
                <div class= "social">
                    <a href="https://www.linkedin.com/in/alexisgarc711/">
                        <img width="32" height="32" src="linkedin-themed.png"/>
                    </a>
                    <a href="https://github.com/luckstrike/">
                        <img width="32" height="32" src="github-themed.png"/>
                    </a>
                </div>
                <div class="built">
                    <img id="react-logo" width="32" height="32" src="logo192-themed.png"/> Built with React
                </div>
            </div>
        )
    }
}