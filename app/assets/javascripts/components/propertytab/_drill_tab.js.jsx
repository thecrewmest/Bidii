let DrillTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 drill-tab my-fonts" style={{height:45+'px', background:'#D8DDE6', paddingTop:'5px'}}>
                <a href="#" className="download-file">
                    <span className="genicon-file-pdf pdf"></span>
                    <span className="download-pdf">Download PDF</span>
                </a>

                <a href="#" className="download-file">
                    <span className="genicon-file-word word"></span>
                    <span className="download-word">Download word</span>
                </a>
            </div>
        )
    }
});