const TaskTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 task-tab topbar">
                <div className="row">
                    <div className="col-sm-9">

                        <a className="add-task" href="#" title="Add Task">
                            <span className="genicon-task-hammer-plus add-task-hammer ic"></span>
                        </a>

                        <a className="btn btn-task-color " title="Print Tasks">
                            <span className="genicon-printer-compact printer ic"/>
                        </a>

                        <a className="btn btn-task-color " title="Export CSV">
                            <span className="genicon-harddrive-download-compact hardrive ic"/>
                        </a>

                        <a className="btn btn-task-color downloads-export" title="Download pdf">
                            <span className="genicon-file-pdf pdf-task ic"/>
                        </a>

                        <a className="btn btn-task-color downloads-export" title="Download word">
                            <span className="genicon-file-word  word-task ic"/>
                        </a>
                    </div>





                     <a href="#accordion" className="task-filter">
                         <span className="genicon-funnel-caret-compact funnel"></span>
                     </a>
                    <div className="col-sm-3 text-right search-div">
                        <div className=" pull-rightcol-md-9">
                            <span className="genicon-magnify magnify magnify-task pull-right"></span>
                            <input className="search-task search"  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;search task"/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});