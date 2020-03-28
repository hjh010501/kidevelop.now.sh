import React from 'react';
import styled from 'styled-components';
import LinkText from './linkText'

const Box = styled.div`
    font-family: 'Noto Sans KR';
    letter-spacing: -0.04em;
    font-size: 0.6em;
    max-width: 400px;
`;

const Row = styled.div`
    margin-bottom: 25px;
`;

const IdBox = styled.div`
    font-size: 0.75em;
`;

const Underline = styled.div`
    width: 6%;
    height: 2px;
    background:white;
    margin-bottom: 25px;
`;

const LinkBox = styled.div`
    font-size: 0.75em;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    height: 0px;
`;


class CardContent extends React.Component {
    render() {
        return (
            <Box>
                <Row>
                    <span style={{fontWeight: 800, fontSize: '1.2em'}}>함종현 </span>Ham Jonghyeon<br/>
                    <IdBox>@kidevelop       @kidevelop</IdBox>
                </Row>
                <Underline></Underline>
                <Row>
                <span style={{fontWeight: 800}}>KAIST</span>, School of Computing <span style={{fontSize: '0.6em'}}>(undergraduate)</span><br/>
                Software Engineer / AI Researcher / UIUX Designer
                </Row>
                <Underline></Underline>
                <Row>
                    <IdBox>kidevelop@kaist.ac.kr</IdBox>
                    <LinkBox>
                        <LinkText url="https://github.com/hjh010501" value="Github"></LinkText>
                        <LinkText url="https://fb.com/kidevelop" value="Facebook"></LinkText>
                        <LinkText url="https://instagram.com/kidevelop" value="Instagram"></LinkText>
                        <LinkText url="/kakao" value="KakaoTalk"></LinkText>
                    </LinkBox>
                </Row>
            </Box>
        );
    }
}

export default CardContent;