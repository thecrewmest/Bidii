let ProjectBody = React.createClass({
    getInitialState() {
        return {
            projects: [],
            archivedProjects: []
        }
    },
    componentDidMount() {
        $.getJSON('/api/v1/projects.json', (response) => {this.setState({projects: response})});

        $.getJSON('/api/v1/archived.json', (response) => {this.setState({archivedProjects: response})});

    },
    handleCreateProject(project) {
        const newState = this.state.projects.concat(project).reverse();
        this.setState({projects: newState});
    },
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/projects/${id}`,
            type: 'DELETE',
            success: (response) => {
                this.removeItemClient(id);
                $('.modal').modal('hide');
            }
        });
    },
    removeItemClient(id) {
        let newProjects = this.state.projects.filter( (project) => {
            return project.id != id;
        });
        this.setState({projects: newProjects})
    },
    updateItems(item) {
        let itemToUpdate = this.state.projects.filter((i) => { return i.id == item.id })
        let items = this.state.projects.filter((i) => { return i.id != item.id });
        let newItem = {
            id: item.id,
            title: item.title,
            description: item.description,
            budget: item.budget,
            progress: itemToUpdate[0].progress,
            cover_image: item.cover_image == undefined? itemToUpdate[0].cover_image : item.cover_image,
            is_archived: item.is_archived == null? itemToUpdate[0].is_archived : item.is_archived
        };
        items.push(newItem);
        this.setState({projects: items });
    },
    updateProjectItem(item) {
        $.ajax({
            url: `/api/v1/projects/${item.id}`,
            type: 'PUT',
            data: { project: item },
            success: () => {
                this.updateItems(item);
                alert('Updated Successfully');
                $('.modal').modal('hide');
            },
            error: () => {
                alert('failed to update. try again later...');
            }
        });
    },
    render() {
        return (
            <div className="container" id="projectBodyDiv">
                {/* Creating a new project */}
                <NewProjectModal handleCreateProject={this.handleCreateProject} />

                {/* Projects Item*/}
                <div className="row">

                    {/* Toggle Add New Project */}
                    <a href="#newProject" data-toggle="modal">
                        <div className="col-md-3 col-xs-12 col-ms-12 project-item1">
                            <span className="genicon-add-circle addcircle"></span>
                            <span className="addProject my-fonts f-r">Add a project</span>
                        </div>
                    </a>

                    {/* Displays all projects that are not archived */}
                    <AllProjects projects={this.state.projects}
                                 handleDelete={this.handleDelete}
                                 doUpdate={this.updateProjectItem} />
                </div>

                <br /><br />

                {/* Archived Projects */}
                <AllArchivedProjects archivedItems={this.state.archivedProjects} />
            </div>
        )
    }
});