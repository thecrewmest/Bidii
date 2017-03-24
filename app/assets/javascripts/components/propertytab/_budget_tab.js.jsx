const BudgetTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 task-tab topbar">
                <div className="row">
                    <div className="col-sm-9">



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