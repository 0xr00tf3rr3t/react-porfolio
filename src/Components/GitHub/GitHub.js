import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'prop-types';
import './Styles/GitHub.css'

export default class Github extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    };
    componentDidMount() {
        GitHubCalendar(this.refs.container, this.props.name);
    }
    render() {
        return (
            <div className={'github'}>
            <div
                className={
                    'calendar' + (this.props.className ? ' ' + this.props.className : '')
                }
                {...this.props}
                ref="container"
            />
            </div>
        );
    }
}