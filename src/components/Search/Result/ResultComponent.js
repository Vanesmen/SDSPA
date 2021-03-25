import React, { useState } from 'react';
import VideoCard from "../VideoCard/VideoCard";
import { Row } from 'antd';
import { Typography } from 'antd';
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Title } = Typography;

const columnsSort = {
    flexDirection: "column",
    alignItems: "flex-start"
  }
  
const rowsSort = {
    flexDirection: "row"
}

let columnDirectionCard = {
    width: 340,
    height: 340,
    "margin" : "20px",
    "overflow": "hidden",
}

let rowDirectionCard = {
    width: "66%",
    height: 262,
    "margin" : "20px",
    "display" : "flex",
    "overflow": "hidden",
    "padding" : "10px"
}


const ResultContainer = (props) => {

    let [sortMode, setSortMode] = useState(rowsSort);
    let [directionCard, setDirectionCard] = useState(columnDirectionCard);

    const activateRowsMode = () => {
        setDirectionCard(columnDirectionCard);
        setSortMode(rowsSort);
    }

    const activateColumnsMode = () => {
        setDirectionCard(rowDirectionCard);
        setSortMode(columnsSort);
    }


    return (
        <>
            <Row justify="start" align="middle" >
                <Title level={4}>Видео по запросу:</Title><span style={{"marginLeft": "15px", "fontSize": "20px", "marginBottom": "0.5em"}}>{props.requestText}</span><span style={{"marginLeft": "15px", "fontSize": "14px", "marginBottom": "0.2em", "opacity" : "0.6"}}>{props.totalResults}</span>

                <div style={{ "marginLeft": "auto" }}>
                    <BarsOutlined style={{ "fontSize" : "20px", "opacity" : sortMode === rowsSort ? "0.5" : "1"}} onClick={activateColumnsMode}/>

                    <AppstoreOutlined style={{ "fontSize" : "20px", "opacity" : sortMode === columnsSort ? "0.5" : "1"}} onClick={activateRowsMode}/>
                </div>
            </Row>
            
            <Row justify="space-between" align="middle" style={sortMode}>
                {   
                    props.videoList ? props.videoList.map(el => <VideoCard  videoLink={el.id.videoId}
                                                                                videoTitle={el.snippet.title}
                                                                                videoDescription={el.snippet.description}
                                                                                videoPreviewImage={el.snippet.thumbnails.medium.url}
                                                                                directionCard={directionCard}
                                                                                key={el.id.videoId}/>) : null
                }
            </Row>
        </>
    )
}

export default ResultContainer