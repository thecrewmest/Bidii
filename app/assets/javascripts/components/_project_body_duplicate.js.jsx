let ProjectBodyDuplicate = React.createClass({
   render() {
       return(
           <div className="container" id="projectBodyDiv">
              <div className="row">

                  <a href="#newProjectModalForm">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item1">
                          <span className="genicon-add-circle addcircle"></span>
                          <span className="addProject my-fonts f-r">Add a project</span>
                      </div>
                  </a>

                  <a href="/overview">
                      <div className="col-md-3 col-xs-12 col-ms-12 project-item">
                          <div className="circle-edit-project">
                              <a href="#" className="edit-project-a">
                                  <span className="genicon-pencil-boxed-compact edit-icon-project "></span>
                              </a>
                          </div>
                          {/*<img src="assets/project-default.png" id="projectDefaultImage"></img>*/}
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-success pbar-border-radius"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:80+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details">
                              <span className="pull-left project-name my-fonts f-r">Sandcity</span>
                              <span className=" pull-right project-percentage-complete-green f-r ">80
                                  <span className="percentage f-r">%</span>
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
                          {/*<img src="assets/project-default.png" id="projectDefaultImage"></img>*/}
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-warning pbar-border-radius"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:50+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details my-fonts">
                              <span className="pull-left project-name my-fonts f-r">Sandcity</span>
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
                          {/*<img src="assets/project-default.png" id="projectDefaultImage"></img>*/}
                          <div className="col-md-12 col-xs-12 col-ms-12 progressbar-div">
                              <div className="progress progress-sm  progress-bar-danger  pbar-border-radius my-fonts"
                                   role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100%"
                                   style={{width:20+'%',height:15+'px'}}>
                              </div>
                          </div>
                          <div className="project-details my-fonts">
                              <span className="pull-left project-name my-fonts f-r">Sandcity</span>
                              <span className=" pull-right project-percentage-complete-danger f-r">40
                                 <span className="percentage f-r">%</span>
                              </span>
                          </div>
                      </div>
                 </a>


               </div>




               {/*Archived projects*/}

               <div className="row">
                   <div className="col-sm-12 p-l-r-20">
                       <div className="panel-group accordion-custom" id="accordion">
                           <div className="panel panel-default" id="accordionBody">
                               <div className="panel-heading archived-projects-according-heading">
                                   <h4 className="panel-title">
                                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                          href="#collapseOne"  style={{background:'#D8DDE6',}}>
                                           <i className="icon-arrow"></i>
                                           <span className="my-fonts f-r">Archived Projects</span>
                                       </a>
                                   </h4>
                               </div>
                               <div id="collapseOne" className="panel-collapse collapse">
                                   <table class="table table-striped">
                                       <thead>
                                       <tr>
                                           <th className="archived-table-th th-td-name">Project name</th>
                                           <th className="archived-table-th">Budget</th>
                                           <th className="archived-table-th">Date archived</th>
                                           <th className="archived-table-th">Action</th>
                                       </tr>
                                       </thead>
                                       <tbody>
                                       <tr>
                                           <td className="archived-table-td th-td-name">Adehyie House</td>
                                           <td className="archived-table-td">$800,000</td>
                                           <td className="archived-table-td">
                                               <span className="archived-red">Archived:</span> 31 Jan 2017</td>
                                           <td className="archived-table-td td-action">
                                               <div className="restore-archive">Restore</div>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td className="archived-table-td th-td-name">Panorma Areana</td>
                                           <td className="archived-table-td">$900,000</td>
                                           <td className="archived-table-td">
                                               <span className="archived-red">Archived:</span> 01 February 2017</td>
                                           <td className="archived-table-td td-action">
                                               <div className="restore-archive">Restore</div>
                                           </td>
                                       </tr>
                                       </tbody>
                                   </table>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>








           </div>
       )
   }

});