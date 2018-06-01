import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Background extends Component {
    state = { pictures: [] };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5000')
            .then(result => result.json())
            .then(resultJSON => {
                let pictures = resultJSON.results.map((user) => {
                    return (
                        <div key={user.login.md5} className="background-picture">
                            <img src={user.picture.large} alt="User" />
                        </div>
                    );
                })
                this.setState({ pictures: pictures });
            });


        console.log(this.state.pictures);
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
