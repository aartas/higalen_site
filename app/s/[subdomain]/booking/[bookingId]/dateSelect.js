'use client'
import { Form, Input, Button, Radio, DatePicker, Calendar, Select } from 'antd';
import dayjs from 'dayjs';

const DateSelect = ({ nextPage, bookingDetails, updateBookingData }) => {
    const [form] = Form.useForm();
    const onFinish = () => {
        form.validateFields().then(async values => {
            console.log('values', values)
            updateBookingData(
                {
                    ...bookingDetails,
                    consultType: values?.consultType,
                    clinicDetails: values?.companyName,
                },
                1
            );
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
                initialValues={{
                    remember: true,
                    consultType: '1',
                }}
            >

                <Form.Item
                    label="Select Location"
                    name='clinic_id'
                    rules={[
                        { required: true, message: 'Please select location from list!' },
                    ]}
                >
                    <Select
                        showSearch
                        size='large'
                        placeholder="Select a Location"
                        optionFilterProp="children"
                    // filterOption={searchExtraOptionFilter}
                    // options={workspaceSelectOptionsWithLogo}
                    />
                </Form.Item>

                <Form.Item
                    label="Select Consult type"
                    name="consultType"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the consult type!',
                        },
                    ]}
                >
                    <Radio.Group
                        options={[
                            { label: 'Video', value: '1' },
                            { label: 'In-Clinic', value: '0' },
                        ]}
                        className='booking_consult_type_radio_group'
                    />

                </Form.Item>
                <Form.Item
                    label=""
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the date!',
                        },
                    ]}
                >
                    <Calendar
                        fullscreen={false}
                        headerRender={() => null}
                    />
                </Form.Item>

                <div className='mt-20'>
                    <Button block type="primary" size='large' htmlType="submit" style={{ minWidth: 100 }}>
                        Continue
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default DateSelect