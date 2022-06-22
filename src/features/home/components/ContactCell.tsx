import { FullscreenExitOutlined } from '@ant-design/icons';
import { Avatar, Col } from 'antd';
import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { RowWrapper } from '../styles';
import { IContact } from '../types';

const DragHandle = SortableHandle(() => (
    <div>
        <FullscreenExitOutlined />
    </div>
));

interface IProps {
    contact: IContact;
}

const ContactCell: React.FC<IProps> = ({ contact }) => {
    const { name, thumb, email, phone, designation } = contact;
    return (
        <RowWrapper align="middle">
            <Col span={2}>
                <DragHandle />
            </Col>

            <Col span={2}>
                <Avatar className="gx-size-40" alt={name} src={thumb} />
            </Col>

            <Col span={5}>{name}</Col>
            <Col span={5}>{email}</Col>
            <Col span={5}>{phone}</Col>
            <Col span={5}>{designation}</Col>
        </RowWrapper>
    );
};

export default SortableElement<any>(ContactCell);
