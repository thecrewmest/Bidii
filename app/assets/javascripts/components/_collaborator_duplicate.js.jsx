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
                            <tr className=" collaborator-circle-row">


                                <td className="circle-td  ">
                                    <div className="collaborator-circle">
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
                                    <div className="collaborator-circle  cd2">
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








                </div>
            </div>
        )
    }
});