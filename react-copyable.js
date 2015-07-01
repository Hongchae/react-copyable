'use strict';

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

var Copyable = React.createClass({displayName: "Copyable",
    propTypes: {
        value : React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("span", null, 
                React.createElement("span", {onClick: this.copy, style: Style.label}, this.props.value), 
                React.createElement("input", {ref: "copyArea", style: Style.copyArea, value: this.props.value})
            )
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
