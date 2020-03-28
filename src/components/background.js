import React from 'react';
import BackText from './backText'


class Background extends React.Component {
    render() {
        return (
            <div style={{position: 'absolute', maxWidth: '100%'}}>
                <BackText duration="70" value=" 2018 Intel International Science and Engineering Fair 대한민국 국가대표 및 Robotics and Intelligent Machines Grand Award 수상"/>
                <BackText duration="70" value=" 2018년 제 9회 한국청소년과학창의대회(ISEF-K) 1등"/>
                <BackText duration="70" value=" 2018 대한민국 인재상 (2018 Talent Award of Korea) 수상"/>
                <BackText duration="70" value=" 제 34회 한국정보올림피아드(KOI) 공모부분 금상"/>
                <BackText duration="70" value=" OpenResource Hackathon Seoul 2019 1등"/>
                <BackText duration="70" value=" NeuralAction 인공지능(AI, Deep Learning) Software Engineer, 프론트엔드 개발자, 기획자, 디자이너 "/>
                <BackText duration="70" value=" 한국디지털미디어고등학교 웹프로그래밍과 졸업"/>
                <BackText duration="70" value=" Korea Advanced Institute of Science and Technology, School of Computing"/>
            </div>
        );
    }
}

export default Background;