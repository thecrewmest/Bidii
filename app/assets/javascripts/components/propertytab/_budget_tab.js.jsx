var BudgetTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 col-xs-12 budget-tab" >

                    <div className="col-md-4 col-xs-12">
                    <span className="project-budget">
                        <span className="genicon-info-circle info-total-budget "></span>
                        Total Project Budget: Ghc40,000
                    </span>
                    </div>


                    <div className="col-md-3 col-xs-12">
                    <span className="project-budget">
                        <span className="genicon-info-circle info-budget-remaing "></span>
                        Budget Remaining: Ghc10,000
                    </span>
            </div>



            </div>
        )
    }
});