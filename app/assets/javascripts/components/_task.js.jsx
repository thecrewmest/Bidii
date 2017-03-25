const Task = React.createClass({
       render: function () {
           function loadProgress () {
               const progress = [];
               for (let i=1; i <= 100; i++) {
                   progress.push(i);
               }
               return progress;
           }

           const pItem = loadProgress();

           function addTaskModal() {
               return (
                   <div id="newTask" className="modal fade" tabIndex="-1" data-width="600" style={{display: 'none'}}>
                       <div className="modal-header">
                           <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                               &times;
                           </button>
                           <h4 className="modal-title center">Add a New Task</h4>
                       </div>
                       <div className="modal-body">
                           <div className="row">
                               <div className="col-sm-12">
                                   <form role="form">
                                       {/* Project Name Field */}
                                       <div className="form-group">
                                           <label>Title</label>
                                           <input type="text" ref='title' placeholder="Title" className="form-control" />
                                       </div>

                                       <div className="row">
                                           <div className="col-sm-5">
                                               <label>Start Date</label>
                                               <input type="text" className="form-control" placeholder="Start Date" />
                                               <div>&nbsp;</div>
                                           </div>
                                           <div className="col-sm-5">
                                               <label>Finish Date</label>
                                               <input type="text" className="form-control" placeholder="Finish Date" />
                                               <div>&nbsp;</div>
                                           </div>
                                           <div className="col-sm-2">
                                               <label>Duration</label>
                                               <input type="text" className="form-control" disabled="disabled" placeholder="Duration" />
                                               <div>&nbsp;</div>
                                           </div>
                                       </div>

                                       <div className="form-group">
                                           <div className="row">
                                               <div className="col-sm-5">
                                                   <label htmlFor="assignee">
                                                       Assignee
                                                   </label>
                                                   <select className="assignee form-control">
                                                       <option>Select</option>
                                                       <option>Joseph</option>
                                                       <option>Kossi</option>
                                                       <option>Harrisson</option>
                                                   </select>

                                               </div>
                                               <div className="col-sm-7">
                                                   <label>Tags</label>
                                                   <input type="text" className="form-control"  />
                                               </div>
                                           </div>
                                       </div>

                                       <div className="form-group">
                                           <div className="row">
                                               <div className="col-sm-12">
                                                   <label htmlFor="taskDescription">Description</label>
                                                   <textarea className="form-control" placeholder="Description"></textarea>
                                               </div>
                                           </div>
                                       </div>

                                       <div className="form-group">
                                           <input id="input-preview" type="file" class="file" />
                                       </div>

                                       <div>&nbsp;</div>
                                       <div className="panel-group accordion-custom" id="accordion">
                                           <div className="panel panel-default">
                                               <div className="panel-heading">
                                                   <h4 className="panel-title">
                                                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo">
                                                           <i className="icon-arrow"></i>
                                                           Additional details
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="collapseTwo" className="panel-collapse collapse">
                                                   <div className="panel-body">
                                                       <div className="form-group">
                                                           <div className="row">
                                                               <div className="col-sm-6">
                                                                   <label htmlFor="taskBudget">Budget</label>
                                                                   <input id="taskBudget" type="number" className="form-control"  />
                                                               </div>
                                                               <div className="col-sm-6">
                                                                   <label htmlFor="taskExtraCost">Extra cost</label>
                                                                   <input id="taskExtraCost" type="number" className="form-control"  />
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>

                                       <div>&nbsp;</div>
                                       <div className="panel-group accordion-custom" id="accordion">
                                           <div className="panel panel-default">
                                               <div className="panel-heading">
                                                   <h4 className="panel-title">
                                                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse2">
                                                           <i className="icon-arrow"></i>
                                                           Progress
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="collapse2" className="panel-collapse collapse">
                                                   <div className="panel-body">
                                                       <div className="row">
                                                           <div className="col-sm-3">
                                                               <label htmlFor="assignee">
                                                                   Progress
                                                               </label>
                                                               <select className="assignee form-control">
                                                                   {pItem.map((item) => <option value={item}>{item + "%"}</option>)}
                                                               </select>
                                                           </div>
                                                           <div className="col-sm-3">
                                                               <label>Report a problem</label>
                                                               <select className="form-control">
                                                                   <option>No</option>
                                                                   <option>Yes</option>
                                                               </select>
                                                           </div>
                                                           <div className="col-sm-6">
                                                               <textarea className="form-control" placeholder="add a comment to your progress"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>

                                       <div>&nbsp;</div>
                                       <div className="panel-group accordion-custom" id="accordion">
                                           <div className="panel panel-default">
                                               <div className="panel-heading">
                                                   <h4 className="panel-title">
                                                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse3">
                                                           <i className="icon-arrow"></i>
                                                           Periodic cost log
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="collapse3" className="panel-collapse collapse">
                                                   <div className="row">
                                                       <div className="col-sm-4">
                                                           <label>From</label>
                                                           <input type="text" className="form-control" placeholder="Start Date" />
                                                           <div>&nbsp;</div>
                                                       </div>
                                                       <div className="col-sm-4">
                                                           <label>To</label>
                                                           <div className="input-group input-append bootstrap-timepicker">
                                                               <input type="text" className="form-control time-picker" />
                                                               <span className="input-group-addon add-on"><i className="fa fa-clock-o" /></span>
                                                           </div>

                                                       </div>
                                                       <div className="col-sm-4">
                                                           <label>Amount Spent</label>
                                                           <input type="number" className="form-control"  />
                                                           <div>&nbsp;</div>
                                                       </div>
                                                   </div>

                                                   <div className="form-group">
                                                       <label>Comment</label>
                                                       <textarea className="form-control" placeholder="add comments" />
                                                   </div>
                                               </div>
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
               )
           };

           return(
               <div>
                   <div>
                       <AppHeader />
                       <MainPropTab/>
                       <TaskTab />
                   </div>

                   <div className="col-md-12 col-xs-12 show-number-of-rows">
                       <span>Showing</span>
                       <select id="options">
                           <option>4</option>
                           <option>5</option>
                           <option>6</option>
                           <option>7</option>
                           <option selected="selected">8</option>
                           <option>9</option>
                           <option>10</option>
                           <option>11</option>
                           <option>12</option>
                           <option>13</option>
                           <option>14</option>
                           <option>15</option>
                           <option>15</option>
                           <option>17</option>
                           <option>18</option>
                           <option>19</option>
                           <option>20</option>
                       </select>
                       <span>Rows</span>
                   </div>

                   <div className="table-responsive task-table-div">
                       <table className="table task-table">
                           <thead>
                           <tr>
                               <th className="task-th tth-0">
                                   <input type="checkbox" className="check-box"/>
                               </th>
                               <th className="task-th tth-1">ID</th>
                               <th className="task-th tth-2">Title</th>
                               <th className="task-th tth-3">Start</th>
                               <th className="task-th tth-4">Finish</th>
                               <th className="task-th tth-5">Duration</th>
                               <th className="task-th tth-6">Progress</th>
                               <th className="task-th tth-7">Tag</th>
                               <th className="task-th tth-8">Assigned to</th>
                               <th  className="task-th tth-9">Action</th>
                           </tr>
                           </thead>
                           <tbody>


                           <tr>

                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1001
                               </td>

                               <td className="task-td ">
                                   Site clearing
                               </td>

                               <td className="task-td">
                                   2017-01-01
                               </td>

                               <td className="task-td">
                                   2017-01-06
                               </td>

                               <td className="task-td">
                                   5d
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

                               <td className="task-td">
                                   Site, preparation
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>




                           <tr>
                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1002
                               </td>

                               <td className="task-td">
                                   Dredging
                               </td>

                               <td className="task-td">
                                   2017-01-06
                               </td>

                               <td className="task-td">
                                   2017-01-10
                               </td>

                               <td className="task-td">
                                   4d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-warning pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:50+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   foundation
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Duncan
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact v"></span>
                                   </a>
                               </td>


                           </tr>




                           <tr>
                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1003
                               </td>

                               <td className="task-td">
                                   Painting
                               </td>

                               <td className="task-td">
                                   2017-01-10
                               </td>

                               <td className="task-td">
                                   02017-01-20
                               </td>

                               <td className="task-td">
                                   10d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:30+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   Furnising
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>



                           <tr>
                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1004
                               </td>

                               <td className="task-td">
                                   Rooging
                               </td>

                               <td className="task-td">
                                   2017-01-20
                               </td>

                               <td className="task-td">
                                   02017-01-26
                               </td>

                               <td className="task-td">
                                   6d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:45+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   Roofing
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>





                           <tr>

                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1005
                               </td>

                               <td className="task-td ">
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-26
                               </td>

                               <td className="task-td">
                                   02017-01-31
                               </td>

                               <td className="task-td">
                                   6d
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

                               <td className="task-td">
                                   Building
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Kelvin
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>



                           <tr>
                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1006
                               </td>

                               <td className="task-td">
                                   Block laying
                               </td>

                               <td className="task-td">
                                   2017-02-02
                               </td>

                               <td className="task-td">
                                   02017-02-03
                               </td>

                               <td className="task-td">
                                   1d
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

                               <td className="task-td">
                                   Building
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>


                           <tr>

                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1007
                               </td>

                               <td className="task-td ">
                                   Plumbing
                               </td>

                               <td className="task-td">
                                   2017-02-06
                               </td>

                               <td className="task-td">
                                   2017-02-09
                               </td>

                               <td className="task-td">
                                   3d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-warning pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:60+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   Building
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>


                           <tr>

                               <td className="task-td ttd-0">
                                   <input type="checkbox" className="check-box"/>
                               </td>
                               <td className="task-td ttd-1">
                                   T1008
                               </td>

                               <td className="task-td ">
                                   Framing
                               </td>

                               <td className="task-td">
                                   2017-02-09
                               </td>

                               <td className="task-td">
                                   02017-02-15
                               </td>

                               <td className="task-td">
                                   4d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-danger pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:40+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   Furnishing
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to" style={{fontFamily: 'Roboto'}}>
                                       &nbsp;&nbsp;Joseph
                                   </span>
                               </td>

                               <td className="task-td">
                                   <a className="action-task" href="#"  title="Edit task">
                                       <span className="genicon-pencil-boxed-compact ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="View task">
                                       <span className="genicon-eye-open ai"></span>
                                   </a>
                                   <a className="action-task" href="#" title="Delete task">
                                       <span className="genicon-trash-stroke-compact ai"></span>
                                   </a>
                               </td>


                           </tr>

                           </tbody>

                           <tfoot  style={{background: 'red'}}>
                           <tr>
                               <th className="task-tf ttf-0">
                                   <input type="checkbox" className="check-box"/>
                               </th>
                               <th className="task-tf ttf-1">Tuid</th>
                               <th className="task-tf ttf-2">Title</th>
                               <th className="task-tf ttf-3">Start</th>
                               <th className="task-tf ttf-4">Finish</th>
                               <th className="task-tf ttf-5">Duration</th>
                               <th className="task-tf ttf-6">Progress</th>
                               <th className="task-tf ttf-7">Tag</th>
                               <th className="task-tf ttf-8">Assigned to</th>
                               <th  className="task-tf ttf-9">Action</th>
                           </tr>
                           </tfoot>
                       </table>

                       <span className="number-of-rows">Showing 1 to 5 of 8 entries</span>
                   </div>
                   {addTaskModal()}

               </div>
           )
       }
});