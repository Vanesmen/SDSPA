import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const VideoCard = (props) => {    

    return(
        <a href={`https://www.youtube.com/watch?v=${props.videoLink}`} target="_blank"  rel="noreferrer">
            <Card hoverable style={props.directionCard} cover={<img style={{"objectFit": "cover", "width":"340px", "height": "240px"}} alt="youtube-video" src={props.videoPreviewImage} />} >
                <Meta title={props.videoTitle} 
                    description={props.videoDescription} />
                
            </Card>
        </a>
    )
}

export default VideoCard