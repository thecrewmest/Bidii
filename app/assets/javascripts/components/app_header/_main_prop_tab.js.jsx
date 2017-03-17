var MainPropTab = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="horizontal-menu navbar-collapse collapse">
                    {/* Properties Component */}
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/overview" className="my-fonts">
                                Overview
                            </a>
                        </li>
                        <li>
                            <a href="/collaborator" className="my-fonts">
                                Collaborator
                            </a>
                        </li>
                        <li>
                            <a href="/task" className="my-fonts">
                                Tasks
                            </a>
                        </li>
                        <li>
                            <a href="/inventory" className="my-fonts">
                                Inventory
                            </a>
                        </li>
                        <li>
                            <a href="/budget" className="my-fonts">
                                Budget
                            </a>
                        </li>
                        <li>
                            <a href="/drilldown" className="my-fonts">
                                Drill
                            </a>
                        </li>
                        <li>
                            <a href="#" className="my-fonts">
                                Documents
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
});