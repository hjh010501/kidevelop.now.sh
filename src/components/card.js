import React from 'react';
import styled from 'styled-components';
import Mimoji from './mimoji';
import CardContent from './cardContent'
const Box = styled.div`
    background: black;
    border: 2px solid white;
    width: 60vw;
    height: 50vh;
    z-index: 1;
    max-width: 900px;
    color: white;
    font-family: 'Noto Sans KR';
    font-size: 30pt;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Space = styled.div`
    width: 50px;
`;

class Card extends React.Component {
    render() {
        return (
            <Box>
                <Mimoji></Mimoji>
                <Space></Space>
                <CardContent></CardContent>
            </Box>
        );
    }
}

export default Card;