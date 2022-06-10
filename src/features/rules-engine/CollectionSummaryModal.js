import React from 'react'
import {connect} from "react-redux";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSwitch,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CWidgetStatsB
} from "@coreui/react";
import PropTypes from "prop-types";

class CollectionSummaryModal extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <CModal size="xl" visible={true} className={"font-config"} onClose={() => {
          this.props.hideCollectionSummary();
        }}>
          <CModalHeader>
            <CModalTitle>Rule Collection - Blood</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CRow>
              <CCol md={2}>
                <CWidgetStatsB
                  className="mb-3"
                  progress={{color: 'success', value: 89.9}}
                  text=""
                  title="Pay Rate"
                  value="89.9%"
                />
              </CCol>
              <CCol md={2}>
                <CWidgetStatsB
                  className="mb-3"
                  text=""
                  progress={{color: 'success', value: 80}}
                  title="Processed # / %"
                  value="1,040 / 80%"
                />
              </CCol>
              <CCol md={2}>
                <CWidgetStatsB
                  progress={{color: 'danger', value: 20}}
                  className="mb-3"
                  text=""
                  title="Rejections"
                  value="260 / 20%"
                />
              </CCol>
              <CCol md={2}>
                <CWidgetStatsB
                  className="mb-3"
                  text=""
                  title="Rules"
                  value="23"
                />
              </CCol>
              <CCol md={2} className={"font-config"}>
                <CFormSwitch defaultChecked label="Active"  id="formSwitchCheckDefault"/>
                <CButton color="dark" size={"sm"}>Clone</CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
                <h6>Top Denials</h6>
                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>Denial Reason</th>
                    <th scope="col" className={"col-md-1"}>#</th>
                    <th scope="col" className={"col-md-1"}>%</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/*{this.props.charges.map((charge) => {*/}
                  {/*  // eslint-disable-next-line react/jsx-key*/}
                  {/*  return (<tr>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[0]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[1]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[2]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[3]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[4]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[5]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[6]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[7]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[8]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[9]}</th>*/}
                  {/*    <th scope="col" className={"col-md-1"}>{charge[10]}</th>*/}

                  {/*  </tr>*/}
                  </tbody>
                </table>
              </CCol>
              <CCol md={6}>
                <h6>Top Payors</h6>
                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>Payor</th>
                    <th scope="col" className={"col-md-1"}>#</th>
                    <th scope="col" className={"col-md-1"}>%</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
                <h6>Top CPTs</h6>
                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>CPT Code</th>
                    <th scope="col" className={"col-md-1"}>#</th>
                    <th scope="col" className={"col-md-1"}>%</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </CCol>
            </CRow>

            {/*Rules*/}
            <CRow>
              <CCol md={2}>
                <h6>Rule Chain
                </h6>
              </CCol>
              <CCol md={9}>
                <button className="plus-button plus-button--small"></button>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>Name</th>
                    <th scope="col" className={"col-md-1"}>Order</th>
                    <th scope="col" className={"col-md-1"}>Status</th>
                    <th scope="col" className={"col-md-1"}>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </CCol>
            </CRow>

            {/*Payor*/}
            <CRow>
              <CCol md={2}>
                <h6>Payor Configurations
                </h6>
              </CCol>
              <CCol md={9}>
                <button className="plus-button plus-button--small"></button>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>

                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>Name</th>
                    <th scope="col" className={"col-md-1"}>Order</th>
                    <th scope="col" className={"col-md-1"}>Status</th>
                    <th scope="col" className={"col-md-1"}>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </CCol>
            </CRow>

            {/*CPT*/}
            <CRow>
              <CCol md={2}>
                <h6>CPT Configurations
                </h6>
              </CCol>
              <CCol md={9}>
                <button className="plus-button plus-button--small"></button>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                <table className="table table-bordered border-primary">
                  <thead>
                  <tr>
                    <th scope="col" className={"col-md-1"}>Name</th>
                    <th scope="col" className={"col-md-1"}>Order</th>
                    <th scope="col" className={"col-md-1"}>Status</th>
                    <th scope="col" className={"col-md-1"}>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </CCol>
            </CRow>
          </CModalBody>
        </CModal>
      </>
    );
  }
}

function hideCollectionSummaryActionCreator() {
  return async function (dispatch, getState) {
    dispatch({
      type: 'SHOW_COLLECTION_SUMMARY',
      value: false
    })
  }
}

CollectionSummaryModal.propTypes = {
  hideCollectionSummary: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    show_collection_summary: state.SHOW_COLLECTION_SUMMARY
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    hideCollectionSummary: () => dispatch(hideCollectionSummaryActionCreator())
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(CollectionSummaryModal)
