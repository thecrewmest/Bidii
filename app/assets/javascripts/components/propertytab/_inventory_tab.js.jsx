const InventoryTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 col-xs-12 inventory-tab" style={{ background:'light-blue$'}}>
                <div className="row row-inv-tab">
                    <div className="col-sm-9">

                        <a className="add-task"   title="Add Materia to inventory" data-toggle ="modal" href="#invModal">
                            <span className="genicon-add add"></span>
                        </a>



                        <span className="take-material">
                            <a id="take-material" title="Take Material" data-toggle ="modal" href="#TakeMaterial" >
                                <span className="genicon-minus minus take-material"></span>
                            </a>
                        </span>
                        <span className="all-takings">
                             <a id="all-takings" title="View all takings" data-toggle ="modal" href="#ViewAllTakings">
                            <span id="view-all" className="genicon-eye-open eye"></span>
                            </a>
                         </span>


                        <a className="btn btn-task-color " title="Print Tasks">
                            <span className="genicon-printer-compact  ic-inv"/>
                        </a>

                        <a className="btn btn-task-color " title="Export CSV">
                            <span className="genicon-harddrive-download-compact  ic-inv"/>
                        </a>

                        <a className="btn btn-task-color downloads-export" title="Download pdf">
                            <span className="genicon-file-pdf  ic-inv"/>
                        </a>

                        <a className="btn btn-task-color downloads-export" title="Download word">
                            <span className="genicon-file-word   ic-inv"/>
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