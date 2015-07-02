'use strict';

var React = require('react');

var Style = {
    copyArea: {
        'width': '1px',
        'padding': '1px',
        'height': '1px',
        'border': '0'
    }
};

var Copyable = React.createClass({
    displayName: "Copyable",
    propTypes: {
        text: React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.number]).isRequired,
        onCopy: React.PropTypes.func,
        selectedColor: React.PropTypes.string,
        style: React.PropTypes.object
    },

    getDefaultProps: function getDefaultProps() {
        return {
            onCopy: function() {},
            selectedColor: '#A5DDFF',
            style: {}
        };
    },

    componentWillMount: function() {

    },

    _getStyles: function() {
        var styles = {
            'cursor': 'pointer',
            'border': '1px solid #CCC',
            'padding': '1px 3px',
            'borderRadius': '2px',
            'backgroundColor': '#FAFAFA',
            'color': '#616c71'
        };

        var key, src = this.props.style;
        for (key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
                styles[key] = src[key];
            }
        }

        return styles;
    },

    _copy: function() {
        var e = this.refs.copyEl.getDOMNode();
        e.focus();
        e.select();

        try {
            document.execCommand('copy');
            e.blur();
            this.props.onCopy(this.props.text);
        } catch(e) {
            this.refs.textEl.getDOMNode().style.backgroundColor = this.props.selectedColor;
        }
    },

    _restore: function() {
        this.refs.textEl.getDOMNode().style.backgroundColor = '#FAFAFA';
    },

    render: function() {
        return (
		<span>
			<span ref="textEl" onClick={this._copy} style={this._getStyles()}>{this.props.text}</span>
			<input ref="copyEl" style={Style.copyArea} value={this.props.text} onBlur={this._restore} readOnly={true} />
		</span>	
        );
    }
});

module.exports = Copyable;

