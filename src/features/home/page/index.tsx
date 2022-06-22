import { Col, Row } from 'antd';
import React from 'react';
import { arrayMove, SortableContainer } from 'react-sortable-hoc';
import ContactCell from '../components/ContactCell';
import HomeService, { data } from '../service';
import { IContact, IPropsSortEnd } from '../types';

const Contacts = SortableContainer<any>(({ contacts }: { contacts: IContact[] }) => {
    return (
        <Row>
            <Col span={24}>
                {contacts.map((contact?: IContact, index?: number) => (
                    <ContactCell key={index} index={index} contact={contact} />
                ))}
            </Col>
        </Row>
    );
});

const HomePage: React.FC<any> = () => {
    const [contacts, setContacts] = React.useState(data);

    const onSortEnd = ({ oldIndex, newIndex }: IPropsSortEnd) => {
        setContacts(arrayMove(contacts, oldIndex, newIndex));
    };

    React.useEffect(() => {
        (async () => {
            const res = await HomeService.get();
            console.log('🚀 ~ file: index.tsx ~ line 8 ~ res', res);
        })();
    }, []);

    return (
        <div>
            <Contacts
                contacts={contacts}
                onSortStart={(evt: { helper: { style: { backgroundColor: string } } }) =>
                    (evt.helper.style.backgroundColor = 'yellow')
                }
                onSortEnd={onSortEnd}
                useDragHandle={true}
            />
        </div>
    );
};

export default HomePage;
