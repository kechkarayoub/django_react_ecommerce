import CustomButton from "../CustomButton";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import styled from "styled-components";
import { get } from "../../storage";
import { get_data } from "./data";
import { get_intro_items } from "./cookies_policy";
import { Modal, Button, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

class CookiesPolicyModal extends Component {
  constructor(props) {
    super(props);
    this.data = get_data();
    var intro_items = get_intro_items(this.data);
    this.state= {
      items: intro_items.items,
      current_language: get("current_language"),
      intro: intro_items.intro,
    };
  }

  static defaultProps = {
    onHide: () => {},
    show: true,
    t: val => val,
  };

  componentDidMount(){
  }

  static getDerivedStateFromProps(props, state) {
    var current_language = get("current_language");
    if(current_language !== state.current_language){
      var new_state = {current_language: current_language};
      return new_state;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState){
    var new_state = {};
    // if(prevState.current_language !== this.state.current_language){
    // }
    if(Object.keys(new_state).length !== 0){
      this.setState(new_state);
    }
  }

  render() {
    const {current_language, items, intro} = this.state;
    var direction_class = current_language === "ar" ? "rtl" : "ltr";
    return (
      <>
      <Modal
        show={this.props.show} 
        onHide={() => this.props.onHide()}
        className={`custom_modal terms_of_service ${direction_class}`}
        backdropClassName='backdrop_custom_z_index_1055'
        animation={false}
      >
        <CookiesPolicyModalStyle className="custom_scroll_bar">
          <Modal.Header>
            <span className="visibility_hidden"></span>
            { this.props.t('Cookies and other storage technologies') }
            <Button variant="circle" data-testid="close_btn_cpm" className={`close-modal ${direction_class}`} onClick={() => this.props.onHide()}>
                <span className="close_ico">×</span>
            </Button>
          </Modal.Header>
          <Modal.Body data-testid="body">
            <Row>
              <p className={`intro `} dangerouslySetInnerHTML={{__html: intro[current_language]}}>
              </p>
              {items.map((item, idx) => {
                return <div key={idx} className={`article `}>
                  <p className={`title `}>
                    {/* <span className="article_number">{this.props.t("Item") + " " + (idx + 1) + ": "}</span> */}
                    <span dangerouslySetInnerHTML={{__html: item.title[current_language]}}></span>
                  </p>
                  {item.intro &&
                    <p className={`intro `} dangerouslySetInnerHTML={{__html: item.intro[current_language]}}>
                    </p>
                  }
                  {item.paragraphs.map((paragraph, idx_p) => {
                    return <div key={idx_p}>
                      <p className={` `} dangerouslySetInnerHTML={{
                        __html: paragraph[current_language]
                      }}></p>
                      {paragraph.list_items &&
                        <ul>
                          {paragraph.list_items.map((li, idxi) => {
                            return <li key={idxi} >
                              <span dangerouslySetInnerHTML={{__html: li[current_language]}}></span>
                              {li.sub_list_items &&
                                <ul>
                                  {li.sub_list_items.map((sli, idxs) => {
                                    return <li key={idxs} dangerouslySetInnerHTML={{__html: sli[current_language]}}></li>
                                  })}
                                </ul>
                              }
                            </li>
                          })}
                        </ul>
                      }
                    </div>
                  })}
                </div>
              })}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton
              added_class="default-bg-color btn-rounded" text={"Close"}
              on_click={() => {
                this.props.onHide();
              }}
              style={{color: "white", }}
            />
          </Modal.Footer>
        </CookiesPolicyModalStyle>
      </Modal>
      </>
    );
  }
}

const CookiesPolicyModalStyle = styled.div`
  height: 100%;
  padding: 10px 25px 10px 15px;
  .modal-body{
    padding: 10px 20px;
    .intro{
      text-align: justify;
    }
    .article{
      margin-bottom: 15px;
      p{
        text-align: justify;
        &.title{
          color: #1fa1cf;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
`;

CookiesPolicyModal.propTypes = {
  onHide: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
  ]),
  show: PropTypes.bool,
  t: PropTypes.func,
};

export default withTranslation('translations')(CookiesPolicyModal);
