const Overview = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <OverviewTab/>
                    </div>
                </div>


                {/*Sidebar and content*/}

                <div className=" side-bar-and-content">
                    <div className="roew">
                        {/*sidebar*/}
                        <div className="col-md-3 col-xs-12 col-sm-12 side-bar">
                            <div className="col-md-12 status-and-icon my-fonts">
                                <span className="status pull-left">Status</span>
                                <span className="genicon-barchart pull-right"></span>
                                <p className="project-t my-fonts">Project</p>
                                <p className="project-n my-fonts">Sandcity</p>
                                <p className="days-remaining-number my-fonts">45</p>
                                <p className="days-remaining-text my-fonts">Days remaining</p>
                                <hr className="line"/>
                                <p className="end-date my-fonts">01-May-2017</p>
                                <p className="end-date-text my-fonts ">Scheduled deadline</p>
                                <hr className="line"/>
                                <p className="percentage-complete my-fonts">50% completed</p>

                                <div className="overview-progressbar-div">
                                    <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                         role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100%"
                                         style={{width:50+'%',height:20+'px'}}>
                                    </div>
                                </div>
                                <p className="overview-task-in-progress my-fonts">
                                    <span className="genicon-manatwork manatwork"></span>
                                    <span>In progress:(4 tasks ongoing, 50%)</span>
                                </p>

                                <div className="overview-progressbar-div">
                                    <div className="progress progress-sm  progress-bar-warning"
                                         role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100%"
                                         style={{width:0+'%',height:20+'px'}}>
                                    </div>
                                </div>
                                <p className="overview-task-in-progress my-fonts">
                                    <span className="genicon-flag flag"></span>
                                     <span> Behind: (1 task, 0%)</span>
                                </p>

                                <div className="overview-progressbar-div">
                                    <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                         role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100%"
                                         style={{width:0+'%',height:20+'px'}}>
                                    </div>
                                </div>
                                <p className="overview-task-in-progress my-fonts">
                                    <span className="genicon-exclamation exclamation"></span>
                                    <span>Late/problematic:(1 task, 0%)</span>
                                </p>

                            </div>
                        </div>

                        {/*content*/}
                        <div className="col-md-9 col-xs-12 col-sm-12 overview-content">
                            <p className=" pull-left four-tasks-ongoing">
                                <span className="genicon-task-hammer darker-grey-hammer"></span>
                                4 tasks ongoing
                            </p>


                            <table className="table table-striped tasks-ongoing-table">
                                <thead>
                                <tr className="ongoing-task-table-head">
                                    <th className="archived-table-th th-td-name">Recent Reports</th>
                                    <th className="archived-table-th">Task Name</th>
                                    <th className="archived-table-th prog">Progress</th>
                                    <th className="archived-table-th">Status</th>
                                    <th className="archived-table-th">Assigned to</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td className="task-ongoing th-td-name">
                                        <span className="genicon-tick-confirm-circle-compact tick-circle"></span>
                                        A day ago
                                    </td>
                                    <td className="task-ongoing">Roofing</td>
                                    <td className="archived-table-td ">
                                        <span className="genicon-manatwork manatwork "></span>
                                        <span>
                                             90%
                                        </span>
                                    </td>
                                    <td className="task-ongoing">
                                        In progress, due in a weeek
                                    </td>
                                    <td className="task-ongoing td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Vansolo
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-ongoing th-td-name">
                                        <span className="genicon-tick-confirm-circle-compact tick-circle"></span>
                                        2 days ago
                                    </td>
                                    <td className="task-ongoing">
                                        Plastering
                                    </td>
                                    <td className="task-ongoing">
                                        <span className="genicon-manatwork manatwork "></span>
                                        <span >
                                            70%
                                        </span>
                                    </td>
                                    <td className="task-ongoing">
                                        In progress, due in 5 days
                                    </td>
                                    <td className="task-ongoing td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Joseph
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-ongoing th-td-name">
                                        <span className="genicon-cross-cancel-circle-compact cross-red "></span>
                                        A day ago
                                    </td>
                                    <td className="task-ongoing">
                                        Plumbing
                                    </td>
                                    <td className="task-ongoing">
                                        <span className="genicon-exclamation exclamation "></span>
                                        <span >
                                             50%
                                        </span>
                                    </td>
                                    <td className="task-ongoing">
                                        In progress, due in 12 days
                                    </td>
                                    <td className="task-ongoing td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name-t0">
                                           &nbsp; &nbsp;&nbsp;Kelvin
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-ongoing th-td-name">
                                        <span className="genicon-cross-cancel-circle-compact cross-grey "></span>
                                        2 days ago
                                    </td>
                                    <td className="task-ongoing">
                                        Framing
                                    </td>
                                    <td className="task-ongoing">
                                        <span className="genicon-calendar-empty "></span>
                                        <span>
                                            &nbsp;90%
                                        </span>
                                    </td>
                                    <td className="task-ongoing">
                                        In progress, due in 2 days
                                    </td>
                                    <td className="task-ongoing td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Dancun
                                        </span>
                                    </td>
                                </tr>


                                </tbody>
                            </table>


                            {/*Tasks completed table*/}
                            <p className=" pull-left four-tasks-ongoing">
                                <span className="genicon-task-hammer darker-grey-hammer"></span>
                                4 tasks completed
                            </p>

                            <table className="table table-striped tasks-ongoing-table">
                                <thead>
                                <tr >
                                    <th className="task-completed th-td-name ">Task Name</th>
                                    <th className="task-completed tch">start Dtae</th>
                                    <th className="task-completed tch">Completion Date</th>
                                    <th className="task-completed tch">Span</th>
                                    <th className="task-completed tch">Assigned to</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td className="task-completed-td th-td-name">
                                        Foundation digging
                                    </td>
                                    <td className="task-completed-td">
                                        1/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                        <span className="genicon-tick-dotted tick-dotted ticks"></span>
                                        15/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                         14 days
                                    </td>
                                    <td className="task-completed-td td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name overview-person">
                                            Joseph
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-completed-td th-td-name">
                                        Fencing
                                    </td>
                                    <td className="task-completed-td">
                                        3/Feb/2016
                                    </td>
                                    <td className="task-completed-td">
                                        <span className="genicon-tick-solid tick-solid ticks"></span>
                                        1/March/2016
                                    </td>
                                    <td className="task-completed-td">
                                        18days
                                    </td>
                                    <td className="task-completed-td td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name">
                                            eric
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-completed-td th-td-name">
                                        Block laying
                                    </td>
                                    <td className="task-completed-td">
                                        1/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                        <span className="genicon-tick-solid tick-solid ticks"></span>
                                        1/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                        2 months
                                    </td>
                                    <td className="task-completed-td td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name">
                                            Duncan
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="task-completed-td th-td-name">
                                        Bending
                                    </td>
                                    <td className="task-completed-td">
                                        1/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                        <span className="genicon-tick-solid tick-solid ticks"></span>
                                        1/Jan/2016
                                    </td>
                                    <td className="task-completed-td">
                                        2 months
                                    </td>
                                    <td className="task-completed-td td-assignee">
                                        <div className="assignee-circle">
                                            <span className="genicon-person"></span>
                                        </div>
                                        <span className="assignee-name">
                                            Dancun
                                        </span>
                                    </td>
                                </tr>


                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>








            </div>
        )
    }
});