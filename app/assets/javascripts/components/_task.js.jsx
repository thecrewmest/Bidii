const Task = React.createClass({
       render: function () {
           return(
               <div>
                   <div>
                       <AppHeader />
                       <MainPropTab/>
                       <TaskTab />
                   </div>

                   <div className="col-md-12 col-xs-12 show-number-of-rows">
                       <span>Show</span>
                       <select id="options">
                           <option>4</option>
                           <option>5</option>
                           <option>6</option>
                           <option>7</option>
                           <option>8</option>
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
                               <th className="task-th tth-1">Tuid</th>
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
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-02
                               </td>

                               <td className="task-td">
                                   02017-01-06
                               </td>

                               <td className="task-td">
                                   5 d
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
                                   90
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;Vansolo
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
                                   T1001
                               </td>

                               <td className="task-td">
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-02
                               </td>

                               <td className="task-td">
                                   02017-01-06
                               </td>

                               <td className="task-td">
                                   5 d
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
                                   90
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;Vansolo
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
                                   T1001
                               </td>

                               <td className="task-td">
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-02
                               </td>

                               <td className="task-td">
                                   02017-01-06
                               </td>

                               <td className="task-td">
                                   5 d
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
                                   90
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;Vansolo
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
                                   T1001
                               </td>

                               <td className="task-td">
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-02
                               </td>

                               <td className="task-td">
                                   02017-01-06
                               </td>

                               <td className="task-td">
                                   5 d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-warning pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:70+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   90
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;Vansolo
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
                                   T1001
                               </td>

                               <td className="task-td">
                                   Build site structure
                               </td>

                               <td className="task-td">
                                   2017-01-02
                               </td>

                               <td className="task-td">
                                   02017-01-06
                               </td>

                               <td className="task-td">
                                   5 d
                               </td>

                               <td className="task-td">
                                   <div className= "task-progress-bar-div">
                                       <div className="progress progress-sm  progress-bar-success pbar-dynamic"
                                            role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100%"
                                            style={{width:90+'%',height:13+'px'}}>
                                       </div>
                                   </div>
                               </td>

                               <td className="task-td">
                                   90
                               </td>


                               <td className="task-td">
                                   <div className="assignee-circle">
                                       <span className="genicon-person"></span>
                                   </div>
                                   <span className="assignee-name-to">
                                            &nbsp;&nbsp;&nbsp;Vansolo
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

                       <span className="number-of-rows">Showing 1 to 5 of 5 entries</span>
                   </div>

               </div>
           )
       }
});