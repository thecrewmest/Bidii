const TaskSheet = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <AppPropertiesTab />
                        <VariablePropTab />
                    </div>
                </div>
                <span className="download-print-title">Download and print tasks assigned to team members</span><br />
                <div className="main-container">
                    <div className="print_instructions_div" >
                        <div className="col-md-6" id="instructions">
                            <span className="steps">Simple Steps:</span><br />

                            <div className="col-md-6">
                                <ol>
                                    <li>Select week</li>
                                    <li>Select the team member</li>
                                    <li>Select project the person is a member</li>
                                    <li>Download the PDF file for printing</li>
                                    <li>Boom! you are done</li>
                                </ol>
                            </div>


                            <div >
                                <span className="steps">Select Week:</span><br />
                                <select className="selectbox form-control">
                                    <option>01-02-2017</option>
                                    <option>02-02-2017</option>
                                    <option>03-02-2017</option>
                                    <option>03-02-2017</option>
                                    <option>05-02-2017</option>
                                    <option>20-02-2017</option>
                                    <option>21-02-2017</option>
                                </select>
                            </div>
                            <br />
                            <div >
                                <span className="steps">Select member:</span><br />
                                <select className="selectbox form-control">
                                    <option>Solomon</option>
                                    <option>Samuel</option>
                                    <option>Gerald</option>
                                    <option>Kelvin</option>
                                    <option>Duncan</option>
                                </select>
                            </div>


                            <div></div>


                        </div>
                        <div className="col-md-6 select-project-div">
                            <span className="selectproject">Select Project</span><br /><br />
                            <div className="sel-project"><input type="checkbox" /><span> Jones Quartey Building</span></div>
                            <div className="sel-project"><input type="checkbox"/><span> Sandcity Hostel</span></div>
                            <div className="sel-project"><input type="checkbox"/><span> Elecon Library</span></div>
                            <div className="sel-project"><input type="checkbox"/><span> Leonard's Project</span></div>
                            <div className="sel-project"><input type="checkbox"/><span> Legon Mall Project</span></div>
                            <br />
                            <br />

                            <button className="downloadbut"><span style={{color: 'black'}}>
                                <span className="genicon-file-pdf" id="pdf-icon-tasksheet">
                                </span> Download PDF</span>
                            </button>

                        </div>
                    </div>
            </div>
        </div>
        )
    }
});
