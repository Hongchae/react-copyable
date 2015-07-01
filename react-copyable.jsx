var React = require('react');

var Style = {
    label: {
        'cursor':'pointer'
    },
    copyArea: {
        'width': '1px',
        'padding': '1px',
        'height': '1px',
        'border': '0'
    }
};

var Copyable = React.createClass({
    propTypes: {
        value : React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <span>
                <span onClick={this.copy} style={Style.label}>{this.props.value}</span>
                <input ref="copyArea" style={Style.copyArea} value={this.props.value} />
        </span>
        );
    },

    copy : function() {
        var element = this.refs.copyArea.getDOMNode();
        element.focus();
        element.select();
        document.execCommand('copy');
        element.blur();
    }
});

module.exports = Copyable;