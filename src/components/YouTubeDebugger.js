// Code YouTubeDebugger Component Here
import React, {Component} from 'react'; 

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleClickBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleClickRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(<div>
            <button onClick = {this.handleClickBit} className = 'bitrate' />
            <button onClick = {this.handleClickRes} className = 'resolution' />
        </div>)
    }

}