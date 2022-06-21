import { Button, Form } from 'antd';
import { FormLayout } from 'antd/lib/form/Form';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IRules {
    required: boolean;
    message: string;
}

interface IFormLayout {
    label: string;
    name: string;
    rules?: IRules[];
    inputField: ReactNode;
    initialValue?: any;
}

interface IProps {
    layoutType?: FormLayout;
    formItems: IFormLayout[];
    onSubmit: (data: any) => void;
    buttonPosition?: string;
    buttonTitle: string;
}

interface IWrapperButtonSubmit {
    position: string;
}
const WrapperButtonSubmit = styled.div<IWrapperButtonSubmit>`
    display: flex;
    justify-content: ${(props) => props.position};
    align-items: center;
`;

const FormComponent: React.FC<IProps> = ({
    layoutType = 'horizontal',
    formItems,
    onSubmit,
    buttonPosition = 'center',
    buttonTitle,
}) => {
    const onFinish = (values: any) => {
        onSubmit(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form layout={layoutType} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            {formItems &&
                formItems.length > 0 &&
                formItems.map((item: IFormLayout, index: number) => {
                    return (
                        <Form.Item
                            key={index}
                            initialValue={item.initialValue}
                            label={item.label}
                            name={item.name}
                            rules={item.rules}
                        >
                            {item.inputField}
                        </Form.Item>
                    );
                })}

            <Form.Item>
                <WrapperButtonSubmit position={buttonPosition}>
                    <Button type="primary" htmlType="submit">
                        {buttonTitle}
                    </Button>
                </WrapperButtonSubmit>
            </Form.Item>
        </Form>
    );
};

export default React.memo(FormComponent);
