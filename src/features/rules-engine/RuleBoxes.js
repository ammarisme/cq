import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow} from "@coreui/react";
import CollectionSummaryModal from "./CollectionSummaryModal";

class RuleBoxes extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadRuleBoxes()
    this.props.loadMyCollection()
  }

  render() {
    console.log(this.props.show_collection_summary)
    return (
      <>
        {
          this.props.show_collection_summary && <CollectionSummaryModal></CollectionSummaryModal>
        }
        <CCol xl className={"font-config"}>

          {
            this.props.rule_boxes && this.props.rule_boxes.length > 0 &&
            <CCard className="mb-12 main-card" onClick={() => {
              this.props.showCollectionSummary()
            }
            }>
              <CCardBody>
                <CCardTitle>Collection templates</CCardTitle>

                <CRow>
                  {
                    this.props.rule_boxes.map((rule_box) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <>
                          <CCol md={2}>
                            <CCard
                              className="mb-3 rule-box-card"
                              style={{maxWidth: '18rem'}}
                            >
                              <CCardBody>
                                <CCardTitle className={"rule-box"}>{rule_box.name}</CCardTitle>
                                <CCardText>
                                  {rule_box.description}
                                </CCardText>
                              </CCardBody>
                            </CCard>
                          </CCol>
                        </>
                      )
                    })
                  }
                  <CCol md={2}>
                    <CCard
                      className="mb-3 rule-box-card"
                      style={{maxWidth: '18rem'}}
                    >
                      <CCardBody>
                        <CCardText style={{
                          "text-align": "center",
                          "margin-top": "31px"
                        }}>
                          +
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          }
          {
            this.props.my_collections && this.props.my_collections.length > 0 &&
            <CCard className="mb-12 main-card">
              <CCardBody>
                <CCardTitle>My Collections</CCardTitle>

                <CRow>
                  {
                    this.props.my_collections.map((rule_box) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <>
                          <CCol md={2}>
                            <CCard
                              className="mb-3 rule-box-card"
                              style={{maxWidth: '18rem'}}
                            >
                              <CCardBody>
                                <CCardTitle className={"rule-box"}>{rule_box.name}</CCardTitle>
                                <CCardText>
                                  {rule_box.description}
                                </CCardText>
                              </CCardBody>
                            </CCard>
                          </CCol>
                        </>
                      )
                    })
                  }
                  <CCol md={2}>
                    <CCard
                      className="mb-3 rule-box-card"
                      style={{maxWidth: '18rem'}}
                    >
                      <CCardBody>
                        <CCardText style={{
                          "text-align": "center",
                          "margin-top": "31px"
                        }}>
                          +
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          }
        </CCol>
      </>
    );
  }
}

function loadRuleBoxesActionCreator() {
  return async function (dispatch, getState) {
    fetch("http://localhost:5000/api/rules-engine/rule-boxes").then(res => res.json())
      .then(result => {
          dispatch({
            type: 'LOAD_RULE_BOXES',
            rule_boxes: result
          })
        }, error => {
          console.log(error)
        }
      )
  }
}

function loadMyCollectionsActionCreator() {
  return async function (dispatch, getState) {
    fetch("http://localhost:5000/api/rules-engine/my-collections").then(res => res.json())
      .then(result => {
          dispatch({
            type: 'LOAD_MY_COLLECTIONS',
            my_collections: result
          })
        }, error => {
          console.log(error)
        }
      )
  }
}


function showCollectionSummaryActionCreator(){
  return async function (dispatch, getState){
    dispatch({
      type : 'SHOW_COLLECTION_SUMMARY',
      value : true
    })
  }
}
RuleBoxes.propTypes = {
  loadRuleBoxes: PropTypes.func,
  loadMyCollection: PropTypes.func,
  rule_boxes: PropTypes.object,
  my_collections: PropTypes.object,
  show_collection_summary :PropTypes.bool,
  showCollectionSummary: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    rule_boxes: state.RULE_BOXES,
    my_collections: state.MY_COLLECTIONS,
    show_collection_summary : state.SHOW_COLLECTION_SUMMARY
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRuleBoxes: () => dispatch(loadRuleBoxesActionCreator()),
    loadMyCollection: () => dispatch(loadMyCollectionsActionCreator()),
    showCollectionSummary : () => dispatch(showCollectionSummaryActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RuleBoxes);
