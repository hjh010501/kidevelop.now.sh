import React from 'react';
import styled from 'styled-components';
const MovePage = styled.a`
    text-decoration:none;
    color: white;
    padding-bottom: 2px;
    height: 25px;
    &:hover {
        border-bottom: 1px solid white;
    }
`;

class LinkText extends React.Component {


    render() {
        const { value, url } = this.props;
        return (
            <MovePage href={url}>
                {value}
            </MovePage>
        );
    }
}




export default LinkText;