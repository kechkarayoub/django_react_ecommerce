import PropTypes from 'prop-types';
import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from 'react-i18next';

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        added_class: "",
        disabled: false,
        on_click: null,
        style: {},
        t: val => val,
        test_id: "",
        text: "",
    };

    render(){
        var test_id = this.props.test_id || ("custom_button_" + parseInt(Math.random() * 100));
        return(
            <CustomButtonStyle data-testid={test_id} disabled={this.props.disabled}
                className={`btn ${this.props.added_class || ""} ${this.props.disabled ? "disabled" : ""}`} type='button' onClick={evt => {
                    if(this.props.on_click && !this.props.disabled){
                        this.props.on_click(evt);
                    }
                }}
                style={this.props.style || {}}
            >
                {this.props.t(this.props.text)}
            </CustomButtonStyle>
        )
    }
}

const CustomButtonStyle = styled.button`
    &.btn{
        border: 0;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        height: 30px;
        margin: auto;
        min-width: 100px;
        padding: 0 10px;
        width: max-content;
        &:focus{
            outline: none;
        }
    }
    &.disabled{
        cursor: not-allowed;
    }
    &.btn-rounded{
        border-radius: 20px;
    }
    &.default-bg-color{
        background-color: #1fa1cf;
        &:active{
            background-color: #1fa1cf;
        }
    }
    &.default-color{
        color: #1fa1cf;
    }
`;

CustomButton.propTypes = {
    added_class: PropTypes.string,
    disabled: PropTypes.bool,
    on_click: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]),
    style: PropTypes.object,
    t: PropTypes.func,
    test_id: PropTypes.string,
    text: PropTypes.string,
};

export default withTranslation('translations')(CustomButton);
