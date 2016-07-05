import React from 'react';
import '../../css/mobile.less'
export default class Mobile extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="page">
                {children}
            </div>
        );
    }
};

Mobile.propTypes = {
    children: React.PropTypes.element.isRequired,
};