import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import C3Chart1 from "../../../../c3Chart/C3Chart1";
import CreateTodo from "../../../../createTodoComponent/create-todo.component";
import EditTodo from "../../../../editTodoComponent/edit-todo.component";
import RiskKey from "../../../../riskKey/RiskKey";
import ComplianceRiskAssessment from "../../../../complianceRiskAssessment/ComplianceRiskAssessment";
import Dashboard from "../../../../dashboard/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import BCM from "../../../../../images/BCM.svg";
import OPrisk from "../../../../../images/OPrisk.svg";
import complianceM from "../../../../../images/complianceM.svg";
import informationS from "../../../../../images/informationS.svg";
import auditM from "../../../../../images/auditM.svg";
import Goverance from "../../../../../images/Goverance.svg";
import AppMenuBuilder from "../../../../appMenubuilder/AppMenuBuilder";
import CommonComponent from "../../../../commonComponent/CommonComponent";
import ApplicationMappingTable from "../../../../applicationMapping/ApplicationMappingTable";
import TaskTable from "../../../../taskTable/TaskTable";
import DocumentSearch from "../../../../documentSearch/DocumentSearch";
import BPMNModeler from "../../../../bpmnModeler/bpmnModeler";
import Home from "../../../../dummyPage/Home";
import FormBuilderIO from "../../../../formIOBuilder/FromBuilderIO";
import FormRendererIO from "../../../../formIOBuilder/FromRendererIO";

const Content = (props) => {
  return (
    <div>
      <Router>
        <div className='container-fluid pl-0'>
          <div id='newSideBar' className='sidebar'>
            <FontAwesomeIcon
              id='menuIcon'
              icon={faBars}
              className='pull-right HideShow'
              onClick={() => props.menuClick()}
              title='Menu'
            />
            {/* <FontAwesomeIcon icon={faBars} className="pull-right HideShow" title="Menu"/> */}
            {props.subListOpen && props.menuExpand ? (
              <FontAwesomeIcon
                id='backIcon'
                icon={faArrowLeft}
                color='white'
                style={{ marginTop: "10%" }}
                onClick={() => this.backClick()}
                title='Back'
              />
            ) : (
              ""
            )}

            {props.appList.length > 0
              ? props.subListOpen
                ? props.menuExpand
                  ? props.appList.map((app, index) =>
                      app["defaultAppId"] == null &&
                      app["appDefinitionKey"] != null &&
                      app["appDefinitionKey"] != undefined ? (
                        index == 0 ? (
                          <Link
                            to={"/" + app["appDefinitionKey"]}
                            className='normalLink marginTop20 active'
                            key={app["appDefinitionKey"]}
                          >
                            <img src={OPrisk} title={app["name"]} />

                            <span> {app["name"]}</span>
                          </Link>
                        ) : (
                          <Link
                            to={"/" + app["appDefinitionKey"]}
                            className='normalLink'
                            key={app["appDefinitionKey"]}
                          >
                            <img src={OPrisk} title={app["name"]} />

                            <span> {app["name"]}</span>
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    )
                  : props.appList.map((app, index) =>
                      app["defaultAppId"] == null &&
                      app["appDefinitionKey"] != null &&
                      app["appDefinitionKey"] != undefined ? (
                        index == 0 ? (
                          <Link
                            to={"/" + app["appDefinitionKey"]}
                            className='normalLink marginTop20 active'
                            key={app["appDefinitionKey"]}
                          >
                            <img src={OPrisk} title={app["name"]} />

                            <span className='hideMenuText'> {app["name"]}</span>
                          </Link>
                        ) : (
                          <Link
                            to={"/" + app["appDefinitionKey"]}
                            className='normalLink'
                            key={app["appDefinitionKey"]}
                          >
                            <img src={OPrisk} title={app["name"]} />

                            <span className='hideMenuText'> {app["name"]}</span>
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    )
                : props.menuExpand
                ? props.appList.map((app, index) =>
                    index == 0 ? (
                      <Link
                        onClick={() => this.afterClick(app)}
                        className='normalLink marginTop20 active'
                        key={app["applicationName"]}
                      >
                        <img src={OPrisk} title={app["applicationName"]} />

                        <span> {app["applicationName"]}</span>
                      </Link>
                    ) : (
                      <Link
                        onClick={() => this.afterClick(app)}
                        className='normalLink'
                        key={app["applicationName"]}
                      >
                        <img src={OPrisk} title={app["applicationName"]} />

                        <span> {app["applicationName"]}</span>
                      </Link>
                    )
                  )
                : props.appList.map((app, index) =>
                    index == 0 ? (
                      <Link
                        onClick={() => this.afterClick(app)}
                        className='normalLink marginTop20 active'
                        key={app["applicationName"]}
                      >
                        <img src={OPrisk} title={app["applicationName"]} />

                        <span className='hideMenuText'>
                          {app["applicationName"]}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        onClick={() => this.afterClick(app)}
                        className='normalLink'
                        key={app["applicationName"]}
                      >
                        <img src={OPrisk} title={app["applicationName"]} />

                        <span className='hideMenuText'>
                          {app["applicationName"]}
                        </span>
                      </Link>
                    )
                  )
              : ""}

            {props.appList.length > 0 ? (
              <Link to='/create' className='normalLink  '>
                <img src={BCM} title='Risk and Control Self Assessment' />{" "}
                <span>Risk and Control Self Assessment</span>
              </Link>
            ) : (
              <Link to='/create' className='normalLink marginTop20 active '>
                <img src={BCM} title='Risk and Control Self Assessment' />{" "}
                <span>Risk and Control Self Assessment</span>
              </Link>
            )}
            <Link to='/ComplianceRiskAssessment' className='normalLink'>
              <img src={complianceM} title='Risk Key Indicators ' />{" "}
              <span>Risk Key Indicators </span>
            </Link>
            <Link to='/C3Chart1' className='normalLink'>
              <img src={informationS} title='Loss Data Management' />{" "}
              <span>Loss Data Management</span>
            </Link>
            <Link to='/Edit' className='normalLink'>
              <img src={auditM} title='Operational Capital Charge' />{" "}
              <span>Operational Capital Charge</span>
            </Link>
            <Link to='/dashBoard' className='normalLink'>
              <img src={Goverance} title='DashBoard' /> <span>DashBoard</span>
            </Link>
          </div>
          {props.urlMapping.length > 0
            ? props.urlMapping.map((app) =>
                app["defaultAppId"] == null &&
                app["appDefinitionKey"] != null &&
                app["appDefinitionKey"] != undefined ? (
                  <>
                    <Route
                      path={"/" + app["appDefinitionKey"]}
                      key={app["appDefinitionKey"]}
                      render={() => (
                        <CommonComponent
                          pageHeading={app["name"]}
                          appKey={app["appDefinitionKey"]}
                          component={AppMenuBuilder}
                        ></CommonComponent>
                      )}
                    />
                  </>
                ) : (
                  ""
                )
              )
            : ""}

          <Route
            path='/'
            exact={true}
            key='Dashboard'
            render={() => (
              <CommonComponent
                pageHeading='Dashboard'
                component={Dashboard}
              ></CommonComponent>
            )}
          />
          <Route
            path='/dashBoard'
            exact={true}
            key='Dashboard'
            render={() => (
              <CommonComponent
                pageHeading='Dashboard'
                component={Dashboard}
              ></CommonComponent>
            )}
          />
          <Route
            path='/RiskKey'
            exact={true}
            key='RiskKey'
            render={() => (
              <CommonComponent
                pageHeading='RiskKey'
                component={RiskKey}
              ></CommonComponent>
            )}
          />
          <Route
            path='/edit'
            exact={true}
            key='EditTodo'
            render={() => (
              <CommonComponent
                pageHeading='EditTodo'
                component={EditTodo}
              ></CommonComponent>
            )}
          />
          <Route
            path='/ComplianceRiskAssessment'
            exact={true}
            key='ComplianceRiskAssessment'
            render={() => (
              <CommonComponent
                pageHeading='ComplianceRiskAssessment'
                component={ComplianceRiskAssessment}
              ></CommonComponent>
            )}
          />
          <Route
            path='/C3Chart1'
            exact={true}
            key='C3Chart1'
            render={() => (
              <CommonComponent
                pageHeading='C3Chart1'
                component={C3Chart1}
              ></CommonComponent>
            )}
          />
          <Route
            path='/create'
            exact={true}
            key='CreateTodo'
            render={() => (
              <CommonComponent
                pageHeading='CreateTodo'
                component={CreateTodo}
              ></CommonComponent>
            )}
          />
          <Route
            path='/taskList'
            exact={true}
            key='TaskList'
            render={() => (
              <CommonComponent
                pageHeading='TaskList'
                component={TaskTable}
              ></CommonComponent>
            )}
          />
          <Route
            path='/applicationManager'
            exact={true}
            key='ApplicationManager'
            render={() => (
              <CommonComponent
                pageHeading='Application Manager'
                component={ApplicationMappingTable}
              ></CommonComponent>
            )}
          />
          <Route
            path='/home'
            exact={true}
            key='Home'
            render={() => (
              <CommonComponent
                pageHeading='Dummy Page'
                component={Home}
              ></CommonComponent>
            )}
          />
          <Route
            path='/searchDocument'
            exact={true}
            key='DocumentSearch'
            render={() => (
              <CommonComponent
                pageHeading='Search Document'
                component={DocumentSearch}
              ></CommonComponent>
            )}
          />
          <Route
            path='/processBuilder'
            exact={true}
            key='BPMNModeler'
            render={() => (
              <CommonComponent
                pageHeading='Process Builder'
                component={BPMNModeler}
              ></CommonComponent>
            )}
          />

          <Route
            path='/formBuilder'
            exact={true}
            key='formBuilder'
            render={() => (
              <CommonComponent
                pageHeading='Form Builder'
                component={FormBuilderIO}
              ></CommonComponent>
            )}
          />
          <Route
            path='/formRenderer'
            exact={true}
            key='formBuilder'
            render={() => (
              <CommonComponent
                pageHeading='Form Renderer'
                component={FormRendererIO}
              ></CommonComponent>
            )}
          />
        </div>
      </Router>
    </div>
  );
};

export default Content;
