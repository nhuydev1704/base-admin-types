import { Row } from 'antd';
import styled from 'styled-components';

export const RowWrapper = styled(Row)`
    padding: 10px 0;

    &:not(:last-child) {
        border-bottom: solid 1px #e8e8e8;
    }
`;
