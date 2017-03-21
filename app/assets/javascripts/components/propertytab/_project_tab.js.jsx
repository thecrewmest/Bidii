let ProjectTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 topbar my-fonts"
                 style={{height:45 +'px', background:'#D8DDE6', paddingTop:'5px'}}>
                <div className="col-sm-3">
                    <div className="project-breadcrumb">Home / Projects</div>
                </div>




                <div className="row col-sm-9">

                     <div className="pull-right project-search" >
                         <div className=" col-md-2">
                             <a href="#">
                                 <span className="genicon-magnify magnify-project"></span>
                             </a>
                         </div>
                         <div className="col-md-9">
                        <input type="text" placeholder="search" className="form-control bidii-search" />
                         </div>
                    </div>
                </div>
            </div>
        )
    }
});
