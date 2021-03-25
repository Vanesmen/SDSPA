import React from 'react';
import { Typography } from 'antd';
import { Input } from 'antd';
import { Row } from 'antd';
import ModalFavoritesSettings from "../modalFavoritesSettings/ModalFavoritesSettings"

import ResultComponent from "./Result/ResultComponent"

const { Search } = Input;
const { Title } = Typography;



const SearchComponent = (props) => {
    const onSearch = value => props.getVideosData(value);


    return (
        <>
            <Row justify="center" align="middle" style={{"flexDirection" : "column"}}>
                <Title level={2}>Поиск видео</Title>
                <Search placeholder="Что хотите посмотреть?" allowClear enterButton="Поиск" size="large" onSearch={onSearch} style={{"maxWidth": "650px"}} defaultValue={props.requestText}/>
                <ModalFavoritesSettings btnName={"Сохранить"} currentRequest={{requestText: props.requestText}} settingsMode={"NEW_REQUEST"}/>
            </Row>

            <ResultComponent videoList={props.videoList} totalResults={props.totalResults} requestText={props.requestText}/>
        
        </>
    )
}

export default SearchComponent