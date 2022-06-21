import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
    children: ReactNode;
}

const WrapperLayout = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    width: 460px;
    padding: 26px;
    border-radius: 6px;
`;

const AuthLayout: React.FC<IProps> = ({ children }) => {
    return (
        <WrapperLayout>
            <FormContainer>{children}</FormContainer>
        </WrapperLayout>
    );
};

export default AuthLayout;
