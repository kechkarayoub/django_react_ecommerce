import Language from "./component/Language";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import styled from "styled-components";
import { flags } from "./_resources";
import { get, set } from "../../storage";
import { withTranslation } from 'react-i18next';

// List of languages
export const languages = [
   { name: "Arabic", short_name: "Ar", value: "ar", flag: flags.flagAr16, alt:"Morocco flag" },
   { name: "English", short_name: "En", value: "en", flag: flags.flagEn16, alt:"United States flag" },
   { name: "French", short_name: "Fr", value: "fr", flag: flags.flagFr16, alt:"France flag" }
];

class LanguageSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open || false,
            selected_language: get("current_language") || "fr",
        };
    }
    static defaultProps = {
        added_class: "",
        style: null,
        t: val => val,
    };
    handleSelectLanguage = (evt, language) => {
        evt.stopPropagation();
        set("current_language", language);
        this.props.i18n.changeLanguage(language);
        this.setState({
            open: false,
            selected_language: language,
        });
    }
    render(){
        const {open, selected_language} = this.state;
        var language_ = languages.filter(l => l.value === selected_language)[0];
        var direction_class = selected_language === "ar" ? "rtl" : "ltr";
        return(
            <LanguageSelectStyle 
                className={`${this.props.added_class || ""} ${direction_class}`} 
                style={this.props.style || {}} role="languages_select"
                onClick={() => this.setState({open: !open})}
                onMouseLeave={() => this.setState({open: false})}
                title={this.props.t(language_.name)}
            >
                <img className="selacted_language_flag" src={language_.flag} alt={this.props.t(language_.alt)} />{this.props.t(language_.short_name)}<i className="fa fa-caret-down"></i>
                {open &&
                    <ul onClick={(evt) => evt.stopPropagation()}>
                        {languages.map((language) => {
                            return <Language 
                                language={language} selected_language={selected_language} 
                                handleSelectLanguage={this.handleSelectLanguage} key={language.value}
                            />
                        })}
                    </ul>
                }
            </LanguageSelectStyle>
        )
    }
}

const LanguageSelectStyle = styled.div`
    color: white;
    cursor: pointer;
    font-weight: bold;
    line-height: 30px;
    min-width: 71px;
    padding: 5px;
    position: relative;
    width: max-content;
    >i{
        margin: 0 5px;
    }
    >img{
        height: 12px;
        margin: 0 5px;
        margin-bottom: 0px;
        max-height: 12px;
        width: 16px;
    }
    ul{
        background: white;
        border: 2px solid gray;
        border-radius: 5px;
        cursor: auto;
        padding: 10px;
        position: absolute;
        top: 100%;
        li{
            border-bottom: 1px solid gray;
            color: black;
            cursor: pointer;
            display: flex;
            line-height: 24px;
            margin-bottom: 5px;
            &:hover{
                color: #1fa1cf;
            }
            &:last-child{
                border-bottom: 0;
                margin-bottom: 0;
            }
            img{
                height: 12px;
                margin: 0 5px;
                margin-top: 5px;
                max-height: 12px;
                width: 16px;
            }
        }
    }
`;

LanguageSelect.propTypes = {
    added_class: PropTypes.string,
    style: PropTypes.object,
    t: PropTypes.func,
};

export default withTranslation('translations')(LanguageSelect);
