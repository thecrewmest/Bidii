const Budget = React.createClass({
    render() {
        return(
            <div style={{background:'white'}}>

                <div classNameName="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <BudgetTab />
                    </div>
                </div>


                <div className="col-md-12 col-xs-12 info-panel pull-left" style={{marginTop: 15+'px', marginBottom: 15+'px'}}>
                    <div className="col-md-4 col-xs-12">
                        <span className="project-budget" style={{fontFamily: 'Roboto'}}>
                            <span className="genicon-info-circle info-total-budget " style={{color: '#494545', verticalAlign: 'text-top', fontSize: 20+'px'}}></span>
                            Total Project Budget: GHC 70000.00
                        </span>
                    </div>


                    <div className="col-md-4 col-xs-12">
                        <span className="project-budget" style={{fontFamily: 'Roboto'}}>
                            <span className="genicon-info-circle info-budget-remaing " style={{color: '#494545', verticalAlign: 'text-top', fontSize: 20+'px'}}></span>
                            Budget Remaining: GHC 30000.00
                        </span>
                    </div>
                </div>

                <table className="table-responsive budget-table">
                    <tbody className="tb">
                        <tr className="budget-row">
                            <td className="budget-td-1">
                                <div className="budget-circle">
                                    <h4>GHC</h4>
                                    <h3>40000.00</h3>
                                </div>
                            </td>

                            <td className="budget-td-2">
                                <span className="equal">=</span>
                            </td>

                            <td className="budget-td-3">
                                <div className="budget-circle">
                                    <h4>GHC</h4>
                                    <h3>35000.00</h3>
                                </div>
                            </td>

                            <td className="budget-td-4">
                                <span className="plus">+</span>
                            </td>

                            <td className="budget-td-5">
                                <div className="budget-circle">
                                    <h4>GHC</h4>
                                    <h3>15000.00</h3>
                                </div>
                            </td>

                            <td className="budget-td-6">
                                <span className="plus">+</span>
                            </td>

                            <td className="budget-td-7">
                                <div className="budget-circle">
                                    <h4>GHC</h4>
                                    <h3>0.00</h3>
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
                            <div className="table-responsive table-twb">
                                <table className="table ">
                                    <tr className="row-twb">
                                        <th className="th-b-t">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b-pc">%</th>
                                        <th className="th-b">End Date</th>
                                    </tr>

                                    <tr>
                                        <td>Foundation</td>
                                        <td>4,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Dredging</td>
                                        <td>6,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:0+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Block laying</td>
                                        <td>30,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-05-01</td>
                                    </tr>

                                    <tr>
                                        <td>Plastering</td>
                                        <td>1000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-warning pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:50+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Framing</td>
                                        <td>13,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:30+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Plumbing</td>
                                        <td>4000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Furnishing</td>
                                        <td>12000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:3+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Roofing</td>
                                        <td>5000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-damger pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:40+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tfoot>
                                    <tr>
                                        <th ></th>
                                        <th className="tf-b">
                                            Ghc70,000</th>
                                        <th ></th>
                                        <th ></th>
                                    </tr>
                                    </tfoot>




                                </table>
                            </div>
                        </div>


                        <div className="col-md-4 col-xs-12 bb">
                            <div className="desc-b">Completed Tasks With Budget</div>
                            <div className="table-responsive ">
                                <table className="table ">
                                    <tr>
                                        <th className="th-b-t">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b-pc">%</th>
                                        <th className="th-b">End Date</th>
                                    </tr>

                                    <tr>
                                        <td>Foundation</td>
                                        <td>2,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Fencing</td>
                                        <td>1,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Block laying</td>
                                        <td>30,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Bending</td>
                                        <td>2,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:100+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tfoot>
                                    <tr>
                                        <th ></th>
                                        <th className="tf-b">
                                            Ghc35,000</th>
                                        <th ></th>
                                        <th ></th>
                                    </tr>
                                    </tfoot>




                                </table>

                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 bb">
                            <div className="desc-b">Ongoing Tasks With Budget</div>
                            <div className="table-responsive ">
                                <table className="table ">
                                    <tr className="th-ogtwb">
                                        <th className="th-b-t">Task</th>
                                        <th className="th-b">Budget</th>
                                        <th className="th-b-pc">%</th>
                                        <th className="th-b">End Date</th>
                                    </tr>

                                    <tr>
                                        <td>Roofing</td>
                                        <td>5,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:85+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Plasterin</td>
                                        <td>5,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:40+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Plumbing</td>
                                        <td>3000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:70+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tr>
                                        <td>Framing</td>
                                        <td>2,000</td>
                                        <td>
                                            <div className= "task-progress-bar-div">
                                                <div className="progress progress-sm  progress-bar-warning pbar-dynamic"
                                                     role="progressbar" aria-valuenow="80"
                                                     aria-valuemin="0" aria-valuemax="100%"
                                                     style={{width:60+'%',height:13+'px'}}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2017-02-01</td>
                                    </tr>

                                    <tfoot >
                                    <tr className="">
                                        <th ></th>
                                        <th className="tf-b">
                                            Ghc15,000</th>
                                        <th ></th>
                                        <th ></th>
                                    </tr>
                                    </tfoot>




                                </table>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
});