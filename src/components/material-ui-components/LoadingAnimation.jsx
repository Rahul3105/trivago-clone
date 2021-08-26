import React from 'react';
import { WaveTopBottomLoading } from 'react-loadingg';
import styled from 'styled-components';
const Loading = () => {
    return <StyledOverlay>
        <WaveTopBottomLoading />
    </StyledOverlay>
};
const StyledOverlay = styled.div`
    background-color: #24243da4;
    position: absolute;
    top: 0;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:2;
`;
export default Loading;