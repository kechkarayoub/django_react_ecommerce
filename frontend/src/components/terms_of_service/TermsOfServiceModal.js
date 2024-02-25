import CustomButton from "../CustomButton";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import styled from "styled-components";
import { Button, Modal, Row } from 'react-bootstrap';
import { get } from "../../storage";
import { get_data } from "./data";
import { get_articles } from "./terms_of_service";
import { withTranslation } from 'react-i18next';

class TermsOfServiceModal extends Component {
  constructor(props) {
    super(props);
    this.data = get_data();
    this.state= {
      articles: get_articles(this.data),
      current_language: get("current_language"),
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

//   componentDidMount(){
//     $('.selectpicker').selectpicker();
//   }

//   componentDidUpdate() {
//     $('.selectpicker').selectpicker("refresh");
//   }


  render() {
    const {current_language, articles} = this.state;
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
        <TermsOfServiceModalStyle className="custom_scroll_bar">
          <Modal.Header>
            <span className="visibility_hidden"></span>
            { this.props.t('Terms of service') }
            <Button variant="circle" data-testid="close_btn_tsm" className={`close-modal ${direction_class}`} onClick={() => this.props.onHide()}>
                <span className="close_ico">×</span>
            </Button>
          </Modal.Header>
          <Modal.Body data-testid="body">
            <Row>
              {articles.map((article, idx) => {
                return <div key={idx} className={`article `}>
                  <p className={`title `}>
                    <span className="article_number">{this.props.t("Item_") + " " + (idx + 1) + ": "}</span>
                    <span>{article.title[current_language]}</span>
                  </p>
                  {article.paragraphs.map((paragraph, idx_p) => {
                    return <div key={idx_p}>
                      <p className={` `} dangerouslySetInnerHTML={{
                        __html: paragraph[current_language]
                      }}></p>
                      {paragraph.list_items &&
                        <ul>
                          {paragraph.list_items.map((li, idx) => {
                            return <li key={idx} dangerouslySetInnerHTML={{__html: li[current_language]}}></li>
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
        </TermsOfServiceModalStyle>
      </Modal>
      </>
    );
  }
}

const TermsOfServiceModalStyle = styled.div`
  height: 100%;
  padding: 10px 25px 10px 15px;
  .modal-body{
    padding: 10px 20px;
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

TermsOfServiceModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ]),
  t: PropTypes.func,
};

export default withTranslation('translations')(TermsOfServiceModal);
