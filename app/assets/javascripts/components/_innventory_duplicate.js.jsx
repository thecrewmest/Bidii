const InventoryDuplicate = React.createClass({
    render() {
        return(
            <div>

                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <InventoryTab />
                    </div>
                </div>


                <div className="main-container">
                    <div className="inventory-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover"
                                               id="sample-table-2">
                                            <thead>
                                            <tr>
                                                <th style={{width: 1 + "%"}}><input type="checkbox"/></th>
                                                <th style={{width: 5 + "%"}}>IUID</th>
                                                <th style={{width: 5 + "%"}} className="col-to-export">Date</th>
                                                <th style={{width: 10 + "%"}} className="col-to-export">Material</th>
                                                <th style={{width: 10 + "%"}} className="col-to-export">Supplied</th>
                                                <th style={{width: 7 + "%"}} className="col-to-export">Unit Cost</th>
                                                <th style={{width: 7 + "%"}} className="col-to-export">Total Cost</th>
                                                <th style={{width: 7 + "%"}} className="col-to-export">Used</th>
                                                <th style={{width: 7 + "%"}} className="col-to-export">Available</th>
                                                <th style={{width: 10+ "%"}} className="col-to-export">In charge</th>
                                                <th style={{width: 5 + "%"}}>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <td>IV1001</td>
                                                <td>1-1-2017</td>
                                                <td>Cement</td>
                                                <td>1000</td>
                                                <td>20</td>
                                                <td>20000</td>
                                                <td>20</td>
                                                <td>980</td>
                                                <td>John</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <td>IV1002</td>
                                                <td>1-2-2017</td>
                                                <td>Iron rod</td>
                                                <td>500</td>
                                                <td>10</td>
                                                <td>5000</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>John</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <td>IV1003</td>
                                                <td>1-1-2017</td>
                                                <td>Wood</td>
                                                <td>1000</td>
                                                <td>20</td>
                                                <td>20000</td>
                                                <td>20</td>
                                                <td>980</td>
                                                <td>John</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <td>IV1004</td>
                                                <td>1-1-2017</td>
                                                <td>Roofing Sheet</td>
                                                <td>800</td>
                                                <td>20</td>
                                                <td>16000</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>John</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>IUID</th>
                                                <th>Date</th>
                                                <th>Material</th>
                                                <th>Quantiy Supplied</th>
                                                <th>Unit Cost</th>
                                                <th>Total Cost</th>
                                                <th>Quantity Used</th>
                                                <th>Available</th>
                                                <th>In charge</th>
                                                <th>Action</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div id="invModal" className="modal fade" tabIndex="-1" data-width="600" style={{display: 'none'}}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Add a new item</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form">
                                    {/* modal fields*/}
                                    <div className="form-group col-md-6">
                                        <label>Date</label>
                                        <input type="text" ref='title' placeholder="Date" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Material</label>
                                        <input type="text" ref='title' placeholder="Material" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Supplied</label>
                                        <input type="text" ref='title' placeholder="No. of items" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Unit Cost</label>
                                        <input type="text" ref='title' placeholder="Cost of each item" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Total Cost</label>
                                        <input type="text" ref='title' disabled="disabled" placeholder="Cost of all items" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Incharge</label>
                                        <input type="text" ref='title' placeholder="Who is in charge" className="form-control" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>
                            Save
                        </button>
                    </div>
                </div>

                <div id="TakeMaterial" className="modal fade" tabIndex="-1" data-width="600" style={{display: 'none'}}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Take material from inventory</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form">
                                    {/* modal fields*/}
                                    <div className="form-group col-md-6">
                                        <label>Date</label>
                                        <input type="text" ref='title' placeholder="Title" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Material</label>
                                        <input type="text" ref='title' placeholder="Material" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Quantity</label>
                                        <input type="text" ref='title' placeholder="Quantity" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Taker</label>
                                        <input type="text" ref='title' placeholder="Your name " className="form-control" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>
                            Save
                        </button>
                    </div>
                </div>

                <div id="ViewAllTakings" className="modal fade" tabIndex="-1" data-width="600" style={{display: 'none'}}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">All Takings</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form">
                                    {/* modal fields*/}

                                    <div className="col-md-3">Date</div>
                                    <div className="col-md-3">Material</div>
                                    <div className="col-md-2">Quantity</div>
                                    <div className="col-md-2">Task</div>
                                    <div className="col-md-2">Taker</div>
                                    <hr/>

                                    <div className="form-group col-md-3">
                                        <span>1-1-2017</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <span>Cement</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>100</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>TA01</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>Kelvin</span>
                                    </div>


                                    <div className="form-group col-md-3">
                                        <span>1-1-2017</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <span>Iron rod</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>150</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>TA02</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>John</span>
                                    </div>



                                    <div className="form-group col-md-3">
                                        <span>1-2-2017</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <span>Roofing sheets</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>30</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>TA03</span>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <span>Eric</span>
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>
                            Save
                        </button>
                    </div>
                </div>




            </div>

        )
    }
});