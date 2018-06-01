import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { STORAGE_KEY } from '../constants';

class Background extends Component {
    state = { pictures: [] };

    componentWillMount() {
        if(localStorage.getItem(`${STORAGE_KEY}:users`)) {
            fetch('https://randomuser.me/api/?results=5000')
                .then(result => result.json())
                .then(users => {
                    localStorage.setItem(`${STORAGE_KEY}:users`, users);
                    let pictures = users.results.map((user) => {
                        return (
                            <div key={user.login.md5} className="background-picture">
                                <img src={user.picture.large} alt="User" />
                            </div>
                        );
                    })
                    this.setState({ pictures: pictures });;
                });
        } else {
           let users = localStorage.getItem(`${STORAGE_KEY}:users`);
           console.log(users);
           let pictures = users.results.map((user) => {
               return (
                   <div key={user.login.md5} className="background-picture">
                       <img src={user.picture.large} alt="User" />
                   </div>
               );
           });
           this.setState({ pictures: pictures});
        }

    }
    render() {
        return (
            <div className="background-container">
                {this.state.pictures}
            </div>
        );
    }
}

Background.propTypes = {};

export default Background;
