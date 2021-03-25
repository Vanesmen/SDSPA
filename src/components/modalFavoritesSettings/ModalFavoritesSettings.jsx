import FavoritesFormContainer from "./FavoritesForm/FavoritesFormContainer";
import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';


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


// const ModalFavoritesSettings = (props) => {
//     return (
//         <>ы
//           <Button type="primary" onClick={showModal}>
//             {props.btnName}
//           </Button>
//           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
/*             <FavoritesFormContainer currentRequest={props.currentRequest} settingsMode={props.settingsMode}/> */
//           </Modal>
//         </>
//       );
// }

export default ModalFavoritesSettings;