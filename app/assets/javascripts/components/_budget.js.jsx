const Budget = React.createClass({
    render() {
        return(
            <div>

                <div classNameName="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <BudgetTab />
                    </div>
                </div>




                <table className="table-responsive budget-table">
                    <tbody className="tb">
                        <tr budger-row>
                            <td className="budget-td-1">
                                <div className="budget-circle">
                                    <h4>GhC</h4>
                                    <h3>40,000</h3>
                                </div>
                            </td>

                            <td className="budget-td-2">
                                <span className="equal">=</span>
                            </td>

                            <td className="budget-td-3">
                                <div className="budget-circle">
                                    <h4>GhC</h4>
                                    <h3>35,000</h3>
                                </div>
                            </td>

                            <td className="budget-td-4">
                                <span className="plus">+</span>
                            </td>

                            <td className="budget-td-5">
                                <div className="budget-circle">
                                    <h4>GhC</h4>
                                    <h3>15,000</h3>
                                </div>
                            </td>

                            <td className="budget-td-6">
                                <span className="plus">+</span>
                            </td>

                            <td className="budget-td-7">
                                <div className="budget-circle">
                                    <h4>GhC</h4>
                                    <h3>0,000</h3>
                                </div>
                            </td>
                        </tr>
                    </tbody>


                    <tfoot className="bf">
                    <tr className="budge-footer">
                        <td className="budget-td-1">
                           Total current Cost
                        </td>

                        <td className="budget-td-2">

                        </td>

                        <td className="budget-td-3">
                            Cost of Tasks Completed
                        </td>

                        <td className="budget-td-4">

                        </td>

                        <td className="budget-td-5">
                            Cost of Tasks Ongoing
                        </td>

                        <td className="budget-td-6">

                        </td>

                        <td className="budget-td-7">
                            Cost of Tasks not started
                        </td>
                    </tr>
                    </tfoot>
                </table>



                <div className="budget-breakdown">
                    <div className="row">

                        <div className="col-md-4 col-xs-12 bb">
                            <div className="desc-b">Task With Budget</div>
                            <div className="table-responsive ">
                                <table className="">
                                    <thead>
                                    <tr>
                                        <th className="th-b">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b">%</th>
                                        <th  className="th-b">End Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>

                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>

                                    <tr>
                                        <td>
                                            Foundation
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>



                                    <tr>
                                        <td>
                                            Foundation
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>


                                    <tr>
                                        <td>
                                            Foundation
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>



                                    <tr>
                                        <td>
                                            Foundation
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>


                                    <tr>
                                        <td>
                                            Dredging
                                        </td>

                                        <td >
                                            1500
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>

                                    <tr>
                                        <td>
                                            Bending
                                        </td>

                                        <td >
                                            1200
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>


                        <div className="col-md-4 col-xs-12 bb">
                            <div className="desc-b">Completed Tasks With Budget</div>
                            <div className="table-responsive ">
                                <table className="">
                                    <thead>
                                    <tr>
                                        <th className="th-b">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b">%</th>
                                        <th  className="th-b">End Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            Foundation
                                        </td>

                                        <td >
                                            400
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            Dredging
                                        </td>

                                        <td >
                                            1500
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>

                                    <tr>
                                        <td>
                                            Bending
                                        </td>

                                        <td >
                                            1200
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 bb">
                            <div className="desc-b">On</div>
                            <div className="table-responsive ">
                                <table className="">
                                    <thead>
                                    <tr>
                                        <th className="th-b">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b">%</th>
                                        <th  className="th-b">End Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            1000
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            1000
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            1000
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            Site clearing
                                        </td>

                                        <td >
                                            1000
                                        </td>

                                        <td className="task-td">
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            2017-01-02
                                        </td>


                                    </tr>




                                    </tbody>

                                </table>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
});