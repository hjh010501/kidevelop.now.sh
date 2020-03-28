import React from 'react';
import styled from 'styled-components';

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
`;

class Card extends React.Component {
    render() {
        return (
            <Box>
                ㄱㅣ달려주세영
            </Box>
        );
    }
}

export default Card;