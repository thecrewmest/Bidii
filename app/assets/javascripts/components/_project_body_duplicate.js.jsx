let ProjectBodyDuplicate = React.createClass({
   render() {
       return(
           <div className="container p-l-100" id="projectBodyDiv">
              <div className="row">

                  <a href="#newProjectModalForm">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item">
                          <span className="genicon-add-circle addcircle"></span>
                          <span className="addProject my-fonts">Add a project</span>
                      </div>
                  </a>

                  <a href="#">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item">
                          <div className="circle-edit-project">
                              <a href="#" className="edit-project-a">
                                  <span className="genicon-pencil-boxed-compact edit-icon-project"></span>
                              </a>
                          </div>
                          <img src="assets/project-default.png" id="projectDefaultImage"></img>
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-success"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:100+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details">
                              <span className="pull-left project-name my-fonts">Sandcity</span>
                              <span className=" pull-right project-percentage-complete-green my-fonts">80
                                  <span className="percentage">%</span>
                              </span>
                          </div>
                      </div>
                  </a>

                  <a href="#">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item">
                          <div className="circle-edit-project">
                              <a href="#" className="edit-project-a">
                                  <span className="genicon-pencil-boxed-compact edit-icon-project"></span>
                              </a>
                          </div>
                          <img src="assets/project-default.png" id="projectDefaultImage"></img>
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-warning"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:50+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details my-fonts">
                              <span className="pull-left project-name">Sandcity</span>
                              <span className=" pull-right project-percentage-complete-orange">60
                                 <span className="percentage">%</span>
                              </span>
                          </div>
                      </div>
                   </a>

                  <a href="#">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item">
                          <div className="circle-edit-project">
                              <a href="#" className="edit-project-a">
                                  <span className="genicon-pencil-boxed-compact edit-icon-project"></span>
                              </a>
                          </div>
                          <img src="assets/project-default.png" id="projectDefaultImage"></img>
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-danger my-fonts"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:20+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details my-fonts">
                              <span className="pull-left project-name">Sandcity</span>
                              <span className=" pull-right project-percentage-complete-danger">40
                                 <span className="percentage">%</span>
                              </span>
                          </div>
                      </div>
                 </a>


           </div>




               {/*Archived projects*/}

               <div className="row">
                   <div className="panel-group accordion-custom" id="accordion">
                       <div className="panel panel-default" id="accordionBody">
                           <div className="panel-heading archived-projects-according-heading">
                               <h4 className="panel-title">
                                   <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                      href="#collapseOne" style={{background:'#D8DDE6'}}>
                                       <i className="icon-arrow"></i>
                                         <span className="my-fonts">Archived Projects</span>
                                   </a>
                               </h4>
                           </div>
                           <div id="collapseOne" className="panel-collapse collapse">
                               <div className="panel-body">

                                   <div className="col-md-12 col-xs-12 col-ms-12 archived">
                                       <div className="col-md-3 col-xs-4 col-4 my-fonts" classID="projectName">Project Name</div>
                                       <div className="col-md-3 col-xs-3 col-3 my-fonts" classID="projectName">Project ID</div>
                                       <div className="col-md-3 col-xs-3 col-3 my-fonts" classID="dateArchived">Date</div>
                                       <div className="col-md-3 col-xs-2 col-2 my-fonts" classID="action my-font">Action</div>
                                   </div>




                                   <div className="col-md-12 col-xs-12 col-ms-12 archivedList">
                                       <div className="col-md-3 col-xs-4 col-4 my-fonts" classID="projectName">Project MB6</div>
                                       <div className="col-md-3 col-xs-3 col-3 my-fonts" classID="projectName">PJ001</div>
                                       <div className="col-md-3 col-xs-3 col-3 my-fonts" classID="projectName">
                                           <span style={{color:'#D9534F'}}>Archived</span> 01-12-2016</div>
                                       <div className="col-md-3 col-xs-2 col-2 archive-list-action">
                                           <div className="col-md-4 col-xs-3 col-ms 2 action-div my-fonts">
                                               <a href="#" className="restore-a">
                                                   <span className="genicon-spinner-arrows spinner my-fonts"></span>
                                                   Restore
                                               </a>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="col-md-12 col-xs-12 col-ms-12 archivedList">
                                       <div className="col-md-3 col-xs-4 col-4" classID="projectName">Project Smart</div>
                                       <div className="col-md-3 col-xs-3 col-3" classID="projectName">PJ002</div>
                                       <div className="col-md-3 col-xs-3 col-3" classID="projectName">
                                           <span style={{color:'#D9534F'}}>Archived</span> 12-12-2016</div>
                                       <div className="col-md-3 col-xs-2 col-2 archive-list-action">
                                           <div className="col-md-4 col-xs-4 col-ms 2 action-div">
                                               <a href="#" className="restore-a">
                                                   <span className="genicon-spinner-arrows spinner"></span>
                                                   Restore
                                               </a>
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