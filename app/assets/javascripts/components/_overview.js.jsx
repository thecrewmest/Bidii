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

                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 col-ms-12 side-bar my-fonts">
                            <div className="col-md-12 status-and-icon my-fonts">
                                <span className="status pull-left">Status</span>
                                <span className="genicon-barchart pull-right"></span>
                            </div>

                            <p className="days-remaining-number my-fonts">45</p>
                            <p className="days-remaining-text my-fonts">Days remaining</p>
                            ................................................
                            <p className="end-date my-fonts">01-May-2017</p>
                            <p className="end-date-text my-fonts ">Scheduled deadline</p>
                            ................................................
                            <p className="percentage-complete my-fonts">50% completed</p>

                            <div className="over-progressbar-div">
                                <div className="progress progress-sm  progress-bar-success"
                                     role="progressbar" aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100%"
                                     style={{width:100+'%',height:15+'px'}}>
                                </div>
                            </div>
                            <p className="overview-task-in-progress my-fonts">
                                <span className="genicon-manatwork manatwork"></span>
                                4 Tasks in progress(45%)
                            </p>

                            <div className="over-progressbar-div">
                                <div className="progress progress-sm  progress-bar-warning"
                                     role="progressbar" aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100%"
                                     style={{width:50+'%',height:15+'px'}}>
                                </div>
                            </div>
                            <p className="overview-task-in-progressmy-fonts">
                                <span className="genicon-flag flag"></span>
                                1 task behind (5%)
                            </p>

                            <div className="over-progressbar-div">
                                <div className="progress progress-sm  progress-bar-danger my-fonts"
                                     role="progressbar" aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100%"
                                     style={{width:20+'%',height:15+'px'}}>
                                </div>
                            </div>
                            <p className="overview-task-in-progress my-fonts">
                                <span className="genicon-exclamation exclamation"></span>
                                0 problematic task (0%)
                            </p>

                        </div>
                        <div className=" col-md-9 col-xs-12 col0ms-12 overview-content my-fonts">
                            <span className="genicon-task-hammer overview-hammer"></span>
                            <span>4 tasks ongoing</span>
                            <div className="main-container" id="overview">
                                <div className="task-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-hover"
                                                           id="sample-table-2">
                                                        <thead>
                                                        <tr>

                                                            <th style={{width: 7 + "%"}} className="col-to-export">Recent reports</th>
                                                            <th style={{width: 7 + "%"}} className="col-to-export">Task Name</th>
                                                            <th style={{width: 7 + "%"}} className="col-to-export">Progress</th>
                                                            <th style={{width: 7 + "%"}} className="col-to-export">Status</th>
                                                            <th style={{width: 10+ "%"}} className="col-to-export">Assigned to</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>

                                                            <td>A day ago</td>
                                                            <td>Roofing</td>
                                                            <td>55%</td>
                                                            <td>Due in a month</td>
                                                            <td>
                                                                <div className="assignee-circle">
                                                                    <span className="genicon-person person-overview"></span>
                                                                </div>
                                                                <span>Van Solo</span>
                                                            </td>

                                                            {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                            {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                                        </tr>
                                                        <tr>

                                                            <td>2 day ago</td>
                                                            <td>Plastering</td>
                                                            <td>30%</td>
                                                            <td>Due in 2 weeks</td>
                                                            <td>
                                                                <div className="assignee-circle">
                                                                    <span className="genicon-person person-overview"></span>
                                                                </div>
                                                                <span>Joseph Abokpe</span>
                                                            </td>

                                                            {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                            {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                                        </tr>
                                                        <tr>


                                                            <td>A day ago</td>
                                                            <td>Plumbing</td>
                                                            <td>70%</td>
                                                            <td>Due in a week</td>
                                                            <td id="ttt">
                                                                <div className="assignee-circle">
                                                                    <span className="genicon-person person-overview"></span>
                                                                </div>
                                                                <span>Duncan M</span>
                                                            </td>

                                                            {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                            {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                                        </tr>
                                                        <tr>

                                                            <td>2 days ago</td>
                                                            <td>Framing</td>
                                                            <td>80%</td>
                                                            <td>Due in 5 days</td>
                                                            <td>
                                                                <div className="assignee-circle">
                                                                    <span className="genicon-person person-overview"></span>
                                                                </div>
                                                                <span>Kelvin Wachira</span>
                                                            </td>


                                                            {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                            {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                                        </tr>

                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>








            </div>
        )
    }
});