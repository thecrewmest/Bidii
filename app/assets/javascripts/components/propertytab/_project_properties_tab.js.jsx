var ProjectPropertiesTab = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="horizontal-menu navbar-collapse collapse">
                    {/* Properties Component */}
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/dashboard" className="my-fonts">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/drilldown" className="my-fonts">
                                Drill down
                            </a>
                        </li>
                        <li>
                            <a href="/tasksheet" className="my-fonts">
                                Task sheet
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});