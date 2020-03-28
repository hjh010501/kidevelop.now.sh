import React from 'react';
import styled from 'styled-components';


const Image = styled.div`
    width: 30%;
    height:50%;
    background-image: url('./img/mimoji.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

`;

class Mimoji extends React.Component {
    render() {
        return (
            <Image>
                
            </Image>
        );
    }
}

export default Mimoji;