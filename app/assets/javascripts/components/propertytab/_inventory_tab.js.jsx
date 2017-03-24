const InventoryTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 col-xs-12 inventory-tab">
                <div className="row row-inv-tab">
                    <div className="col-sm-9">

                        <a className="add-material"   title="Add Materia to inventory" data-toggle ="modal" href="#invModal">
                            <span className="genicon-add add"></span>
                        </a>



                        <span >
                            <a id="take-material" title="Take Material from inventory" data-toggle ="modal" href="#TakeMaterial" >
                                <span className="genicon-minus minus take-material"></span>
                            </a>
                        </span>
                        <span>
                            <a id="all-takings" title="View all takings" data-toggle ="modal" href="#ViewAllTakings">
                            <span id="view-all" className="genicon-eye-open eye"></span>
                            </a>
                         </span>


                        <a className=" print-inv" title="Print Tasks">
                            <span className="genicon-printer-compact printer-inv"/>
                        </a>

                        <a className=" hardrive-inv" title="Export CSV">
                            <span className="genicon-harddrive-download-compact hardrive"/>
                        </a>

                        <a className=" downloads-export-inv" title="Download pdf">
                            <span className="genicon-file-pdf  download-export-inv"/>
                        </a>

                        <a className=" downloads-export-inv" title="Download word">
                            <span className="genicon-file-word   download-export-inv"/>
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