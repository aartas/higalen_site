'use client'
import { Form, Input, Button } from 'antd';

const DateSelect = () => {
    const [form] = Form.useForm();
    const onFinish = () => {

        form.validateFields().then(async values => {
            // updateWorkspaceData(
            //     {
            //         ...workspaceData,
            //         name: values?.companyName,
            //         logo,
            //         logoObject,
            //     },
            //     1
            // );
        }).catch(errorInfo => {
            form.scrollToField(errorInfo?.errorFields?.[0]?.name, {
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        });
    };
    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >

                <Form.Item
                    className="mt-10"
                    label="Location name"
                    name="companyName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the location name!'
                        },
                    ]}
                >
                    <Input placeholder="Enter your location name" size="large" className='create_workspace_input_fields' />
                </Form.Item>

                <div
                    className='display-flex flex-justify-end mt-20'
                >
                    <Button type="primary" htmlType="submit" style={{ minWidth: 100 }}>
                        Next
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default DateSelect