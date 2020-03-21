import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    color: white;
`;

class BackText extends React.Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
      }

    render() {
        const { value } = this.props;
        return (
            <Text ref={this.divRef}>{value}</Text>
        );
    }
}




export default BackText;