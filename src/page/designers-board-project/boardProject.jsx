import React from "react";
// importing logo and profileImage to be passed as props to Header
import profileImage from "../../assets/avatars/av1.png";
import profileImage_2 from "../../assets/avatars/av2.png";
// importing font awesome icons
import {
  faFolderOpen,
  faSheetPlastic,
  faCalendar,
  faListCheck,
  faSearch,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
// importing ktm-logo to be passed as props to SideBar
import ktmLogo from "../../assets/icons/KTM.png";
// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SideBar,
  CardContainer,
  TabBar,
  BoardHead,
  Contributer,
  Shortcut,
  Calender,
  DrivePoster,
  Header,
} from "../../component";
function BoardProject() {
  // tabList array is created to hold the values for each tab.
  // bodyTabList contains body tabs
  const boardTabList = [
    { icon: "", label: "dashboard", key: "dashboard" },
    { icon: "", label: "tasks", key: "tasks" },
    { icon: "", label: "communication", key: "communication" },
    { icon: "", label: "files", key: "files" },
  ];
  // sample cards
  const cardTypeOne = {
    cardClassName: "",
    taskDetail: {
      title: "Input Fields",
      category: "Design System",
      className: "primary",
    },
    thisProjectContributers: [profileImage, profileImage_2],
    completedTaskNumbers: 2,
    allTaskNumber: 8,
    startedDate: "07.07.2022",
    key: "shouldBeUnique",
  };
  const cardTypeTwo = {
    cardClassName: "",
    taskDetail: {
      title: "Landing Page Design",
      category: "Desktop",
      className: "secondary",
    },
    thisProjectContributers: [profileImage],
    completedTaskNumbers: 4,
    allTaskNumber: 5,
    startedDate: "31.08.2022",
    key: "shouldBeUnique",
  };
  const cardTypeThree = {
    cardClassName: "",
    taskDetail: {
      title: "Screen Size research",
      category: "UX and research",
      className: "tertiary",
    },
    thisProjectContributers: [profileImage],
    completedTaskNumbers: 3,
    allTaskNumber: 3,
    startedDate: "20.07.2022",
    key: "shouldBeUnique",
  };
  // sample cardContainer array
  const cardContainerProjectsTypeOne = [cardTypeOne, cardTypeTwo, cardTypeOne];
  const cardContainerProjectsTypeTwo = [cardTypeOne, cardTypeTwo];
  const cardContainerProjectsTypeThree = [
    cardTypeThree,
    cardTypeThree,
    cardTypeThree,
    cardTypeThree,
    cardTypeThree,
  ];
  // sample notes in calender
  const notes = [
    {
      className: "bg-primary-lighter",
      key: "note1",
      title: "Today's 1st task",
      startTime: 7,
      endTime: 8,
    },
    {
      className: "bg-primary-lighter",
      key: "note2",
      title: "Today's 2nd task",
      startTime: 9,
      endTime: 11,
    },
    {
      className: "bg-secondary-light",
      key: "note3",
      title: "lunch time",
      startTime: 13,
      endTime: 14,
    },
    {
      className: "bg-secondary-lighter",
      key: "note4",
      title: "Today's 3rd task",
      startTime: 18,
      endTime: 23,
    },
    {
      className: "bg-danger",
      key: "note5",
      title: "Today's 4th task",
      startTime: 1,
      endTime: 6,
    },
  ];
  return (
    <div className="w-auto h-auto d-flex flex-column">
      <Header />
      <main className="w-100 h-auto shadow d-flex overflow-hidden bg-board">
        <SideBar logo={ktmLogo} />
        <div className="w-100 h-auto d-flex flex-column py-3 px-4 board-sections-container">
          <section className="w-100 h-auto d-flex flex-column gap-1 mb-2 board-header">
            <BoardHead />
          </section>
          <section className="w-100 d-flex flex-column board-body">
            {/* this section is going to be devided into 2 parts
									1. top section devided into 2 parts itself
											1-left. with col-8
											2-right. with col-4
									
									2. bottom section devided into 2 parts
											1-left. with col-8 containing cardContainers
											2-right with col-4 containing calender
						*/}
            <div className="w-100 h-auto d-flex justify-content-between board-top">
              <div className="col-8 d-flex flex-column pe-1 pb-1 board-top-left">
                <header className="w-auto h-auto d-flex flex-column align-items-start justify-content-between">
                  <h1 className="display-5 fw-bold text-capitalize m-0 text-color-secondary-dark">
                    advanture 1290 dashboard
                  </h1>
                  <span className="fs-6 m-0 text-color-secondary-light">
                    Updated 1 day ago
                  </span>
                </header>
                <TabBar
                  className={"mb-2 shortcut-hover-secondary"}
                  tabList={boardTabList}
                />
                <div className="w-100 h-auto d-flex board-top-left-details">
                  <div className="contributer-container">
                    <h5 className="h5 text-color-secondary-light">
                      Contributers
                    </h5>
                    <Contributer
                      contributers={[profileImage, profileImage_2]}
                      isAddOptionOn={true}
                      imageWidth={4}
                    />
                  </div>
                  <ul className="w-100 h-auto d-flex align-items-end m-0 py-2 ps-2 pe-3 gap-3 shortcuts">
                    {/* first li is for start border and has no child */}
                    <li className="list-unstyled m-0 h-3rem border-color-secondary-light" />
                    {/* nex li_s will contain child */}
                    <li className="list-unstyled">
                      <Shortcut
                        icon={faFolderOpen}
                        label="9 files"
                        className="rounded-4 fs-5 p-1 m-0 transition-all border-color-secondary-light border-hover-secondary shortcut-hover-secondary"
                      />
                    </li>
                    <li className="list-unstyled">
                      <Shortcut
                        icon={faSheetPlastic}
                        label="2 invoices"
                        badgeLabel="new"
                        className="rounded-4 fs-5 p-1 m-0 transition-all border-color-secondary-light border-hover-secondary shortcut-hover-secondary"
                      />
                    </li>
                    <li className="list-unstyled ms-auto">
                      <Shortcut
                        icon={faSearch}
                        label="filter"
                        className="rounded-4 fs-5 p-1 m-0 transition-all border-color-secondary-light border-hover-secondary shortcut-hover-secondary"
                      />
                    </li>
                    {/* next li is for end border and has no child */}
                    <li className="list-unstyled m-0 h-3rem border-color-secondary-light" />
                    <li
                      className={
                        "list-unstyled w-auto h-auto d-flex align-items-center justify-content-between p-1 m-0 transition-all rounded-4 border-color-secondary-light border-hover-secondary shortcut-hover-secondary cursor-pointer"
                      }
                    >
                      <Shortcut
                        icon={faCalendar}
                        className="fs-4 p-1 m-0 rounded-3 text-color-board-bg bg-purple"
                      />
                      <Shortcut
                        icon={faListCheck}
                        className="fs-4 p-1 m-0 text-color-secondary-light"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4 d-flex flex-column ps-1 pb-1 board-top-right">
                <div className="drive-project">
                  <header className="w-100 h-auto d-flex align-items-center mb-3">
                    <h2 className="h2 fw-bold text-capitalize m-0 text-color-secondary-dark">
                      project drive
                    </h2>
                    <div className="w-aoto h-100 d-flex align-items-cente ms-auto me-4">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="fs-5 fw-bold m-0 ms-2 cursor-pointer text-color-secondary-light text-hover-secondary transition-all"
                      />
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="fs-5 fw-bold m-0 ms-2 cursor-pointer text-color-secondary-light text-hover-secondary transition-all"
                      />
                    </div>
                  </header>
                </div>
                <ul className="w-100 h-auto d-flex m-0 px-0 py-2 gap-3 mb-3 scroll-design drivePoster-container">
                  <li className="col-6 list-unstyled">
                    <DrivePoster />
                  </li>
                  <li className="col-6 list-unstyled">
                    <DrivePoster />
                  </li>
                  <li className="col-6 list-unstyled">
                    <DrivePoster />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-between board-bottom">
              <div className="col-8 pe-1 pt-1 board-bottom-left">
                <div className="w-100 rounded-4 tasks-container-body">
                  <ul className="w-100 h-auto d-flex align-items-start m-0 p-0">
                    <li className="col-4 pe-3 h-auto list-unstyled">
                      <CardContainer
                        containerTitle={"To Do"}
                        thisContainerCards={cardContainerProjectsTypeOne}
                      />
                    </li>
                    <li className="col-4 pe-3 h-auto list-unstyled">
                      <CardContainer
                        containerTitle={"in progress"}
                        thisContainerCards={cardContainerProjectsTypeTwo}
                      />
                    </li>
                    <li className="col-4 pe-3 h-auto list-unstyled">
                      <CardContainer
                        containerTitle={"done"}
                        thisContainerCards={cardContainerProjectsTypeThree}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4 h-100 d-flex flex-column ps-1 pt-1 ms-auto board-bottom-right">
                <Calender notes={notes} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default BoardProject;
