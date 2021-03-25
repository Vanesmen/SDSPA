import FavoritesFormContainer from "./FavoritesForm/FavoritesFormContainer";
import React, { useState } from 'react';
import { Button } from 'antd';


const ModalFavoritesSettings = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = () => {    
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        {props.btnName}
      </Button>
      <FavoritesFormContainer
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        currentRequest={props.currentRequest}
        settingsMode={props.settingsMode}
      />
    </div>
  );
};


export default ModalFavoritesSettings;