import React from 'react';
import { Form, Input, Cascader, Slider, Modal  } from 'antd';


const FavoritesForm = (props) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    requestText: props.currentRequest ? props.currentRequest.requestText : props.requestText,
    name: props.currentRequest ? props.currentRequest.name : "",
    maxResults: props.currentRequest ? props.currentRequest.maxResults : 13,
    sortMethod: props.currentRequest ? [props.currentRequest.sortMethod] : ["data"],
  }, [props.requestText]);
  

  const onCreate = (values) => {
    let newRequest = {
      name: values.name,
      requestText: values.requestText,
      maxResults: values.maxResults,
      sortMethod: values.sortMethod[0]
    }

    switch (props.settingsMode) {
      case "NEW_REQUEST":
        props.setNewRequest(newRequest);
        return
      case "EDIT_REQUEST":
        props.editRequest({id: props.currentRequest.id, ...newRequest});
        return
      default:
        console.error("Укажите метод настройки. Прим.: 'NEW_REQUEST', 'EDIT_REQUEST'");
    }
  };

  
  return (
    <Modal
      visible={props.visible}
      title={props.settingsMode === "NEW_REQUEST" ? "Сохранить запрос" : "Настройки запроса" }
      okText="Сохранить"
      cancelText="Отмена"
      onCancel={props.onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            props.onCreate();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        form={form}
        
      >
        <Form.Item
          name="requestText"
          label="Запрос"
          rules={[
            {
              required: true,
              message: 'Введите запрос!',
            },
          ]}
        >
          <Input placeholder="Ваш запрос" disabled={props.settingsMode === "EDIT_REQUEST" ? false : true}/>
        </Form.Item>
        <Form.Item
          name="name"
          label="Название"
          rules={[
            {
              required: true,
              message: 'Введите название!',
            },
          ]}
        >
          <Input placeholder="Укажите название" />
        </Form.Item>
  
          <Form.Item name="sortMethod" noStyle label="Сортировать по">
              <Cascader
                  options={[
                    {
                        value: 'date',
                        label: 'По дате создания',
                    },
                    {
                        value: 'rating',
                        label: 'По рейтингу',
                    },
                    {
                        value: 'relevance',
                        label: 'По релевантности запросов',
                    },
                    {
                        value: 'title',
                        label: 'По названию',
                    },
                    {
                        value: 'videoCount',
                        label: 'По количеству видеозаписей',
                    },
                    {
                        value: 'viewCount',
                        label: 'По количеству просмотров',
                    },
                  ]}
                  allowClear
              />
          </Form.Item>
  
        <Form.Item name="maxResults" label="Максимальное количество">
          <Slider
            marks={{
              0: 0,
              10: 10,
              20: 20,
              30: 30,
              40: 40,
              50: 50,
            }}
            />
        </Form.Item>        
      </Form>
    </Modal>
  );
};

export default FavoritesForm;