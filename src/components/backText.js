import React from 'react';
import styled from 'styled-components';
import MarqueeText from 'react-marquee-text-component';

const Styled = styled.div`
        color: transparent;
        -webkit-text-stroke: 1px white;
        font-size:9vh;
        font-weight: 800;
        text-overflow: none;
        opacity: .5;
        letter-spacing: -0.04em;
        line-height: 12.5vh;
        font-family: 'Noto Sans KR';
        transition: 1s;
        user-select: none;
        &:hover {
            color: white;
            opacity: 1;
        }
`;

class BackText extends React.Component {

    render() {
        const { value, duration } = this.props;
        return (
            <Styled>
                <MarqueeText className="backText" duration={duration} repeat={10} text={value}></MarqueeText>
            </Styled>
        );
    }
}




export default BackText;