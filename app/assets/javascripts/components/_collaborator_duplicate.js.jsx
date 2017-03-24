const Collaborator = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <CollaboratorTab />
                    </div>
                </div>


                <div className="main-collaborator colabo-div">
                    <div className="col-md-12 p-title">
                        <span className="pull-left project-collab">Sandcity Hostel</span>
                        <span className="genicon-pencil pencil-collabo"></span>
                    </div>





                    <table className="table-responsive collaborator-table">
                       <tbody>
                            <tr className="collaborator-circle-row">


                                <td className="circle-td">
                                    <div className="collaborator-circle cc1">
                                        <div className="edit-circle">
                                            <a className="edit-collabo" href="#" title="Edit collaborator">
                                                <span className="genicon-pencil"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="collaborator-details cd1">
                                        <p>Van Solo</p>
                                        <p>233549691947</p>
                                        <p>Vansolo313@gmail.com</p>
                                        <p>Last update: Mon 20 Mar 2017 08:49</p>
                                    </div>
                                </td>


                                <td className="circle-td">
                                    <div className="collaborator-circle cd2">
                                        <div className="edit-circle">
                                            <a className="edit-collabo" href="#" title="Edit collaborator">
                                                <span className="genicon-pencil"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="collaborator-details cd2">
                                        <p>Joseph</p>
                                        <p>233549691947</p>
                                        <p>joseph@gmail.com</p>
                                        <p>Last update: Mon 20 Mar 2017 08:49</p>
                                    </div>
                                </td>


                                <td className="circle-td">
                                    <div className="collaborator-circle cc3">
                                        <div className="edit-circle">
                                            <a className="edit-collabo" href="#" title="Edit collaborator">
                                                <span className="genicon-pencil"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="collaborator-details cd2">
                                        <p></p>
                                        <p>Duncan</p>
                                        <p>233549691947</p>
                                        <p>duncan@gmail.com</p>
                                        <p>Last update: Mon 20 Mar 2017 08:49</p>
                                    </div>
                                </td>


                                <td className="circle-td">
                                    <div className="collaborator-circle cc4 ">
                                        <div className="edit-circle">
                                            <a className="edit-collabo" href="#" title="Edit collaborator">
                                                <span className="genicon-pencil"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="collaborator-details cd4">
                                        <p>Kelvin</p>
                                        <p>233549691947</p>
                                        <p>kelvy@gmail.com</p>
                                        <p>Last update: Mon 20 Mar 2017 08:49</p>
                                    </div>
                                </td>
                            </tr>
                       </tbody>
                    </table>



                    {/*collabrator modal*/}
                    <div id="collaborators-modal" className="modal fade" tabIndex="-1" data-width="500"
                         style={{display: 'none'}}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Add collaborator</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Collaborator</label>
                                            <div className="col-sm-9">
                                                <input type="text" ref='title' placeholder="Collaborator's name or email address"
                                                       className="form-control"/>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Company</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>Choose a company</option>
                                                    <option>Despite Groups</option>
                                                    <option>The Crew</option>
                                                </select>
                                            </div>
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

                    {/*Update company modal*/}
                    <div id="collaborators-edit-company-name-modal" className="modal fade" tabIndex="-1"
                         data-width="500" style={{display: 'none'}}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Update company name</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Name</label>
                                            <div className="col-sm-8">
                                                <input type="text" ref='title' placeholder="Company name"
                                                       className="form-control"/>
                                            </div>
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

                    {/*Update collaborator modal*/}
                    <div id="collaborators-edit-user-modal" className="modal fade" tabIndex="-1" data-width="500"
                         style={{display: 'none'}}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Update collaborator details</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Company</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>choose a company</option>
                                                    <option>The Crew</option>
                                                    <option>Despite Group</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Privillege</label>
                                            <div className="col-sm-9">
                                                <select className="collaborator-privillege form-control">
                                                    <option value="admin">Project admin</option>
                                                    <option value="member">Member</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Email</label>
                                            <div className="col-sm-9">
                                                <input type="number" ref='budget' placeholder="Email"
                                                       className="form-control"/>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                            <button type="button" className="btn btn-success" onClick={this.handleClick}>
                                Save
                            </button>
                        </div>
                    </div>





                </div>
            </div>
        )
    }
});