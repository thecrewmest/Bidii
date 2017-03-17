const OverviewTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 side-bar my-fonts" id="overviewTab">
               <a href="#" className="download-file"><span className="genicon-file-pdf download">Download pdf</span></a>
                <a href="#" className="download-file-word"><span className="genicon-file-word download">Download Word</span></a>
                <span className="project-title my-fonts">Sandcity</span>
            </div>
        )
    }
});