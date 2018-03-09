import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import _ from 'lodash';

const THUMBNAIL = "https://picsum.photos/520/230?random";
const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
  },
  tag: {
    type: 'input',
    label: 'Tags'
  },
  body: {
    type: 'textarea',
    label: 'Post Body'
  },
  image: {
    type: 'input',
    label: ''
  }
};

class PostNew extends React.Component {
  renderInput(field) {
    return(
      <div className='form-group'>
        <label
          className='form-group-label'>
          {field.label}
        </label>
        <input className='form-group-input' type={field.type} {...field.input} />
        <div className='form-group-help warning'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  renderTextarea(field) {
    return(
      <div className='form-group'>
        <label
          className='form-group-label'>
          {field.label}
        </label>
        <textarea className='form-group-input' rows={field.rows} type={field.type} {...field.input} />
        <div className='form-group-help warning'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values)
    .then(() => {
      this.props.reset();
    });
    // hide the form
    this.props.hidePostAddForm();
  }

  onCancel() {
    // hide the form
    this.props.hidePostAddForm();
    // reset all fields
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;
    const postFormClassName = `panel-side-new ${this.props.postFormVisible ? '' : 'hide'}`;
    return (
      <div className={postFormClassName}>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field type='text' label='Title' name='title' component={this.renderInput} />
          <Field type='text' label='Tags' name='tag' component={this.renderInput} />
          <Field rows='4' label='Post Body' name='body' component={this.renderTextarea} />
          <button type='submit' className='btn btn-primary'>Submit</button>
          <button type='button' className='btn btn-white' onClick={this.onCancel.bind(this)}>Cancel</button>
        </form>
      </div>
    );
  }
}
/**
 * validates add post form
 * @param  {object} values list of all values in the form
 * @return {object}        list of all errors
 */
function validate(values) {
  const errors = {};
  // Validate the input values
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}!`;
    }
  });
  // if errors object is empty then there're no errors otherwise
  // redux would take it as error
  return errors;
}
/**
 * redux form decorator
 */
export default reduxForm({
  validate,
  form: 'PostNewForm',
  fields: _.keys(FIELDS),
  initialValues: {
    image: THUMBNAIL
  }
})(
  connect(null, { createPost })(PostNew)
);
