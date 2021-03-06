const descStyle = {
    opacity: 1,
    textDecoration: null
};

const labelStyle = {
    opacity: 1
};



var PendingTask = React.createClass({
    render() {
        return (
            <li className="dropdown">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                    <i className="clip-list-5" />
                    <span className="badge"> 4</span>
                </a>
                <ul className="dropdown-menu todo">
                    <li>
                        <span className="dropdown-menu-title"> You have 4+ pending tasks</span>
                    </li>
                    <li>
                        <div className="drop-down-wrapper">
                            <ul>
                                <li>
                                    <a className="todo-actions" href="javascript:void(0)">
                                        <i className="fa fa-square-o"></i>
                                        <span className="desc" style={descStyle}>painting of rooms</span>
                                        <span className="label label-danger" style={labelStyle}> today</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="todo-actions" href="javascript:void(0)">
                                        <i className="fa fa-square-o"></i>
                                        <span className="desc" style={descStyle}>Plastering of wallls</span>
                                        <span className="label label-danger" style={labelStyle}> today</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="todo-actions" href="javascript:void(0)">
                                        <i className="fa fa-square-o"></i>
                                        <span className="desc"> Site survey</span>
                                        <span className="label label-warning"> tommorow</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="todo-actions" href="javascript:void(0)">
                                        <i className="fa fa-square-o"></i>
                                        <span className="desc"> Fixing of all plumbing works</span>
                                        <span className="label label-success"> this week</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="view-all">
                        <a href="javascript:void(0)">
                            See all tasks <i className="fa fa-arrow-circle-o-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});