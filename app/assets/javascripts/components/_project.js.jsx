let Project = React.createClass({
    render() {
        return(
            <div id="m">
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <ProjectHeader />
                </div>

                <div className="main-container">
                    <ProjectBody />
                    {/*<ProjectBodyDuplicate />*/}
                </div>
            </div>
        )
    }
});


