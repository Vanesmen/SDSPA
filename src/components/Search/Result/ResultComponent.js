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


const ResultContainer = (props) => {

    let [sortMode, setSortMode] = useState(rowsSort);

    const activateRowsMode = () => {
        setSortMode(rowsSort)
    }

    const activateColumnsMode = () => {
        setSortMode(columnsSort)
    }


    return (
        <>
            <Row justify="start" align="middle" >
                <Title level={4}>Видео по запросу:</Title><span style={{"margin-left": "15px", "fontSize": "20px", "marginBottom": "0.5em"}}>{props.requestText}</span><span style={{"marginLeft": "15px", "fontSize": "14px", "marginBottom": "0.2em", "opacity" : "0.6"}}>{props.totalResults}</span>

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
                                                                                videoPreviewImage={el.snippet.thumbnails.medium.url}/>) : null
                }
            </Row>
        </>
    )
}

export default ResultContainer