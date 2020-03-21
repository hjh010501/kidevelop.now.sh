import React from 'react';
import BackText from './backText'

class Background extends React.Component {
    render() {
        return (
            <div>
                <BackText value="😀"/>
                <BackText value="😃"/>
            </div>
        );
    }
}

export default Background;