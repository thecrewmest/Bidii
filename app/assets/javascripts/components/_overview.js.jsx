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

                    <div>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 col-ms-12 side-bar my-fonts">
                            <div className="col-md-12 status-and-icon my-fonts">
                                <span className="status pull-left">Status</span>
                                <span className="genicon-barchart pull-right"></span>
                            </div>

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
                                4 Tasks in progress(45%)
                            </p>

                            <div className="overview-progressbar-div">
                                <div className="progress progress-sm  progress-bar-warning"
                                     role="progressbar" aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100%"
                                     style={{width:0+'%',height:20+'px'}}>
                                </div>
                            </div>
                            <p className="overview-task-in-progressmy-fonts">
                                <span className="genicon-flag flag"></span>
                                1 task behind (5%)
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
                                0 problematic task (0%)
                            </p>

                        </div>


                        {/*content*/}

                        <div className="col-md-9 col-xs-12 overview-content">
                            jhjhjh
                        </div>




                    </div>
                   </div>








            </div>
        )
    }
});