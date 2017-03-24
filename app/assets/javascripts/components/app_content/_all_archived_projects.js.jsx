let AllArchivedProjects = React.createClass({
    render() {


        let archivedProjects = this.props.archivedItems.map((project) => {
            return (
                <tr>
                    <td className="archived-table-td th-td-name">{project.title}</td>
                    <td className="archived-table-td">{'GHC'+ project.budget.toString()}</td>
                    <td className="archived-table-td">
                        <span className="archived-red">Archived:</span> {project.created_at}</td>
                    <td className="archived-table-td td-action">
                        <div className="restore-archive">Restore</div>
                    </td>
                </tr>
            )
        });


        return (
            <div className="row">
                <div className="col-sm-12 p-l-r-20">
                    <div className="panel-group accordion-custom" id="accordion">
                        <div className="panel panel-default" id="accordionBody">
                            <div className="panel-heading archived-projects-according-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                       href="#collapseOne" style={{background:'#D8DDE6'}}>
                                        <i className="icon-arrow"></i>
                                        <span className="my-fonts f-r">Archived Projects</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="archived-table-th th-td-name">Project name</th>
                                            <th className="archived-table-th">Budget</th>
                                            <th className="archived-table-th">Date archived</th>
                                            <th className="archived-table-th">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {archivedProjects}
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