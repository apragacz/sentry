/**
 * A generic component to render a FormField-like component inside of a Panel
 *
 * This is unconnected to any Form magic
 */

import PropTypes from 'prop-types';
import React from 'react';

import FormFieldControl from './forms/formField/formFieldControl';
import FormFieldDescription from './forms/formField/formFieldDescription';
import FormFieldHelp from './forms/formField/formFieldHelp';
import FormFieldLabel from './forms/formField/formFieldLabel';
import FormFieldWrapper from './forms/formField/formFieldWrapper';

class PanelFormFieldItem extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
    label: PropTypes.node,
    help: PropTypes.node,
    children: PropTypes.node,
  };
  static defaultProps = {
    inline: true,
  };

  render() {
    let {inline, label, help, children} = this.props;
    return (
      <FormFieldWrapper inline={inline}>
        <FormFieldDescription inline={inline}>
          <FormFieldLabel>{label}</FormFieldLabel>
          <FormFieldHelp>{help}</FormFieldHelp>
        </FormFieldDescription>

        <FormFieldControl>{children}</FormFieldControl>
      </FormFieldWrapper>
    );
  }
}
export default PanelFormFieldItem;
