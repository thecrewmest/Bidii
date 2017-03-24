let TaskSheet = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <AppPropertiesTab />
                        <VariablePropTab />
                    </div>
                </div>
            </div>
        )
    }
});
