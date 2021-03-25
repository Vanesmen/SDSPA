import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'antd';
import { List, Typography } from 'antd';
import ModalFavoritesSettings from "../modalFavoritesSettings/ModalFavoritesSettings";
const { Title } = Typography;




const FavoritesListComponent = (props) => {

    const test = async (requestText, maxResults, sortMethod) => {
        await props.getVideosData(requestText, maxResults, sortMethod);
    }


    return (
        <Row justify="start" align="start" style={{"flexDirection" : "column"}}>
            <Title level={3}>Избранное</Title>
            {props.requestItems.map(item => 
                <List.Item style={{"cursor": "pointer"}}  key={item.id}>
                    <NavLink onClick={() => {test(item.requestText, item.maxResults, item.sortMethod)}} to="/search" id={item.id}>{item.name}</NavLink>

                    <div style={{"marginRight": "auto","marginLeft": "20px"}}>
                        <ModalFavoritesSettings btnName={"Изменить"} currentRequest={{...item}} settingsMode={"EDIT_REQUEST"}/>
                    </div>                
                </List.Item>
            )}
        </Row>
    )
}

export default FavoritesListComponent