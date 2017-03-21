const Drill = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <DrillHeader />
                </div>



                <div>
                    <div className="row sidebar-row">
                        {/* Left Sidebar*/}
                            <div className="col-md-3 col-sm-12 col-xs-12 drill-sidebar static-side-bar">
                                <DrillDown />
                            </div>

                           <div className="col-md-9 col-xs-12 drill-content ">
                               <div className="col-md-12 col-xs-12">
                                   <div>
                                       <span className="genicon-task-hammer hammer"></span>
                                       <span className="drill-down-instruction my-fonts">
                                        Select a criteria in the side bar and press 'Drill down' at the bottom of
                                        the bar to see which task delays this project.
                                        </span>
                                   </div>
                               </div>

                               <table className="table table-striped tasks-ongoing-table ">
                                   <thead>
                                   <tr className="ongoing-task-table-head">
                                       <th className="drill-table-head dth-tasks">Project/task</th>
                                       <th className="drill-table-head dth-duedate">Due Date</th>
                                       <th className="drill-table-head dth-status">Status</th>
                                       <th className="drill-table-head">Current Progress</th>
                                       <th className="drill-table-head">Expected Progress</th>
                                       <th className="drill-table-head ">Ahead/Behind</th>
                                       <th className="drill-table-head dth-assignee">Assigned to</th>
                                   </tr>
                                   </thead>
                                   <tbody>



                                   <tr>
                                       <td>
                                           Foundation digging
                                       </td>

                                       <td >
                                           01/April/2017
                                       </td>

                                       <td >
                                           <span className="genicon-manatwork manatwork"></span>
                                       </td>

                                       <td className="current-progress">
                                           80%
                                       </td>

                                       <td className="expected-progress">
                                            85%
                                       </td>

                                       <td >
                                           <span className="genicon-"></span>
                                           5%
                                       </td>

                                       <td >
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Vansolo
                                        </span>
                                       </td>
                                   </tr>


                                   <tr>
                                       <td >
                                           Block laying
                                       </td>

                                       <td >
                                           01/April/2017
                                       </td>

                                       <td>
                                           <span className="genicon-calendar-empty calender"></span>
                                       </td>

                                       <td className="current-progress">
                                           0%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            5%
                                        </span>
                                       </td>

                                       <td >
                                            5%
                                       </td>

                                       <td >
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Joseph
                                        </span>
                                       </td>
                                   </tr>



                                   <tr>
                                       <td >
                                           Plumbing
                                       </td>

                                       <td >
                                           02/April/2017
                                       </td>

                                       <td >
                                           <span className="genicon-calendar-empty calender"></span>
                                       </td>

                                       <td className="current-progress">
                                           50%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            45%
                                        </span>
                                       </td>

                                       <td>
                                            5%
                                       </td>

                                       <td>
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Vansolo
                                        </span>
                                       </td>
                                   </tr>



                                   <tr>
                                       <td>
                                           Painting
                                       </td>

                                       <td >
                                           15/April/2017
                                       </td>

                                       <td >
                                           <span className="genicon-exclamation exclamation"></span>
                                       </td>

                                       <td className="current-progress">
                                           15%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            15%
                                        </span>
                                       </td>

                                       <td>
                                           0%
                                       </td>

                                       <td >
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Joseph
                                        </span>
                                       </td>
                                   </tr>





                                   <tr>
                                       <td className="drill-td">
                                           Site clearing
                                       </td>

                                       <td >
                                           20/April/2016
                                       </td>

                                       <td >
                                           <span className="genicon-tick-solid tick-solid"></span>
                                       </td>

                                       <td className="current-progress">
                                           100%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            100%
                                        </span>
                                       </td>

                                       <td>
                                           0%
                                       </td>

                                       <td>
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Joseph
                                        </span>
                                       </td>
                                   </tr>



                                   <tr>
                                       <td >
                                           Tile laying
                                       </td>

                                       <td >
                                           18/April/2017
                                       </td>

                                       <td >
                                           <span className="genicon-bell-solid  bell"></span>
                                       </td>

                                       <td className="current-progress">
                                           45%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            60%
                                        </span>
                                       </td>

                                       <td>
                                           15%
                                       </td>

                                       <td >
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Kelvin
                                        </span>
                                       </td>
                                   </tr>



                                   <tr>
                                       <td >
                                           Bending
                                       </td>

                                       <td >
                                           18/April/2017
                                       </td>

                                       <td >
                                           <span className="genicon-flag flag  bell"></span>
                                       </td>

                                       <td className="current-progress">
                                           45%
                                       </td>

                                       <td className="expected-progress">
                                           <span >
                                            60%
                                        </span>
                                       </td>

                                       <td>
                                           15%
                                       </td>

                                       <td >
                                           <div className="assignee-circle">
                                               <span className="genicon-person"></span>
                                           </div>
                                           <span className="assignee-name-to">
                                            &nbsp;&nbsp;Kelvin
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