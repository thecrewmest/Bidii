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





                <table className="table-b">
                    <thead>
                    <tr>
                        <th id="hd">
                            <div id="circle">
                                <span id="Ghc">GHc</span>
                                <span id="figure">4,000</span>
                            </div>
                        </th>

                        <th className="signs"><span id="sign">=</span></th>


                        <th id="hd">
                            <div id="circle">
                                <span id="Ghc1">GHc</span>
                                <span id="figure1">2,000</span>
                            </div>
                        </th>

                        <th className="signs"><span id="sign">+</span></th>


                        <th id="hd">
                            <div id="circle">
                                <span id="Ghc2">GHc</span>
                                <span id="figure2">1,500</span>
                            </div>
                        </th>

                        <th className="signs"><span id="sign">+</span></th>


                        <th id="hd">
                            <div id="circle">
                                <span id="Ghc3">GHc</span>
                                <span id="figure3">500</span>
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id="tdd">Current Cost</td>
                        <th id="equal-th"></th>

                        <td id="tdd">Cost of tasks completed</td>
                        <th id="plus-th"></th>

                        <td id="tdd">Cost of task ongoing</td>
                        <th id="plus-th"></th>

                        <td id="tdd">Cost of tasks not started</td>
                    </tr>

                    </tbody>
                </table>



                <div className="col-md-12 col-xs-12" id="three-bar"></div>
                {/*Descriptions*/}


                <div className="container" id="three">
                    <div className="row">
                        <div className="col-md-4 col-xs-12" id="budget-comp"><span id="bh">Tasks With Budget</span>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th id="tt" className="date">Budget</th>
                                        <th id="tt">Task</th>
                                        <th id="tt" className="supplied">%</th>
                                        <th id="tt">End Date</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td id="tt" className="date">100</td>
                                        <td id="tt">Painting</td>
                                        <td id="tt" className="supplied">60</td>
                                        <td id="tt">1-2-2017</td>

                                    </tr>
                                    <tr>
                                        <td id="tt" className="date">300</td>
                                        <td id="tt">Roofing</td>
                                        <td id="tt" className="supplied">40</td>
                                        <td id="tt">1-2-2017</td>

                                    </tr>


                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12" id="budget-comp"><span id="bh2">Completed Tasks With Budget</span>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover" >
                                    <thead>
                                    <tr>
                                        <th id="tt" className="date">Budget</th>
                                        <th id="tt">Task</th>
                                        <th id="tt" className="supplied">%</th>
                                        <th id="tt">End Date</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td id="tt" className="date">100</td>
                                        <td id="tt">Painting</td>
                                        <td id="tt" className="supplied">100</td>
                                        <td id="tt">1-2-2017</td>

                                    </tr>

                                    <tr>
                                        <td id="tt" className="date">200</td>
                                        <td id="tt">Foundation digging</td>
                                        <td id="tt" className="supplied">100</td>
                                        <td id="tt">1-2-2017</td>

                                    </tr>

                                    <tr>
                                        <td id="tt" className="date">300</td>
                                        <td id="tt">Block laying</td>
                                        <td id="tt" className="supplied">100</td>
                                        <td id="tt">1-2-2017</td>

                                    </tr>



                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12" id="budget-comp"><span className="bh3">Nearly Completed Tasks With Budget</span>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover" >
                                    <thead>
                                    <tr>
                                        <th id="tt" className="date">Budget</th>
                                        <th id="tt">Task</th>
                                        <th id="tt" className="supplied">%</th>
                                        <th id="tt">End Date</th>

                                    </tr>
                                    </thead>
                                    <tbody>



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