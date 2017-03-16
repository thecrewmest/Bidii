var InventoryTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 side-bar" >
                <span className="project-budget">
                       <a id="create-new-inventory" data-toggle ="modal" href="#invModal">
                           <i className="fa fa-plus"></i>
                           Add new
                       </a>
                </span>

                <span className="take-material">
                    <a id="create-new-inventory" data-toggle ="modal" href="#TakeMaterial" >
                        <span id="take-minus">-</span>
                        Take Material
                    </a>
                </span>
                <span className="all-takings">
                    <a id="create-new-inventory" data-toggle ="modal" href="#ViewAllTakings">
                        <span id="view-all" className="genicon-eye-open"></span>
                        View all takings
                    </a>
                </span>
            </div>
        )
    }
});