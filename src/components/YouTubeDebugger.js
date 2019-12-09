// Code YouTubeDebugger Component Here

import React from 'react';

 class YouTubeDebugger extends React.Component{
    constructor(){
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
        }
    }
    handleBitrate = () =>{
        this.setState({
            settings:{
              bitrate: 12
                ...this.state.settings,
                
            }
        })
    }
    handleResoluation = () =>{
        this.setState({
            settings:{
               video:{
                    resolution:'720p'
                }
                
                 ...this.state.settings,
            }
        })
    }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>
                {this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResoluation}>
                {this.state.settings.video.resolution}</button>
            </div>
        );
    }
}


export default YouTubeDebugger;