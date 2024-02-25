import CookiesPolicyModal from "./terms_of_service/CookiesPolicyModal";
import DataUsePolicyModal from "./terms_of_service/DataUsePolicyModal";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import styled from "styled-components";
import TermsOfServiceModal from "./terms_of_service/TermsOfServiceModal";
import { get } from "../storage";
import { get_terms_service_notice } from "../utils";
import { withTranslation } from 'react-i18next';

class CustomTSNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added_class: props.added_class,
      current_language: get("current_language"),
      open_cookie_policy: false,
      open_data_use_policy: false,
      open_terms_of_service: false,
      registration_label: props.registration_label,
    };
  }
  
  static defaultProps = {
    added_class: "",
    registration_label: "",
  };

  static getDerivedStateFromProps(props, state) {
    var current_language = get("current_language");
    if(current_language !== state.current_language){
      var new_state = {
        added_class: props.added_class,
        current_language: current_language,
        registration_label: props.registration_label,
      };
      return new_state;
    }
    return null;
  }

  handleTermsOfServiceNoticeClicked = (evt) => {
    // Triggred when Terms of service, Data Use Policy or Cookie Policy links was clicked 
    evt.stopPropagation();
    let el = evt.target;
    if(el && el.classList.contains("term_of_service_span")){
      this.setState({open_terms_of_service: true});
    }
    else if(el && el.classList.contains("data_use_policy_span")){
      this.setState({open_data_use_policy: true});
    }
    else if(el && el.classList.contains("cookie_policy_span")){
      this.setState({open_cookie_policy: true});
    }
  }

  render() {
    const {added_class, current_language, open_cookie_policy, open_data_use_policy, open_terms_of_service, registration_label} = this.state;
    var terms_service_notice = get_terms_service_notice({registration_label: registration_label})
    return (<>
      <CustomTSNoticeStyle className={`terms_service_notice ${added_class || ""}`}>
        <div className="notice" dangerouslySetInnerHTML={{
        __html: terms_service_notice[current_language]
      }} onClick={this.handleTermsOfServiceNoticeClicked}></div>
      </CustomTSNoticeStyle>

      {open_cookie_policy &&
        <CookiesPolicyModal show={open_cookie_policy} onHide={() => this.setState({open_cookie_policy: false})}/>
      }
      {open_data_use_policy &&
        <DataUsePolicyModal show={open_data_use_policy} onHide={() => this.setState({open_data_use_policy: false})}/>
      }
      {open_terms_of_service &&
        <TermsOfServiceModal show={open_terms_of_service} onHide={() => this.setState({open_terms_of_service: false})}/>
      }
    </>);
  }
}

const CustomTSNoticeStyle = styled.div`
  border-radius: 6.3px;
  overflow: hidden;
  padding: 13px 0;
  .notice{
    color: #777;
    font-size: 12px;
    b{
      font-weight: bold;
      color: black;
    }
    span{
      &.span_link{
        color: #1fa1cf;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (max-width: 1199px){
  }
  @media screen and (max-width: 767px){
  }
`;

CustomTSNotice.propTypes = {
  added_class: PropTypes.string,
  registration_label: PropTypes.string,
};

export default withTranslation('translations')(CustomTSNotice);
