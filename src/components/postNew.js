import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends React.Component {
  renderField(field) {
    return(
      <div className="form-group">
        <label
          className="form-group-label">
          {field.label}
        </label>
        <input
          className="form-group-input"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.isAddPost ? "panel-side-new hide" : "panel-side-new"}>
        <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
      <Field
        label="Post Body"
        name="body"
        component={this.renderField}
      />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
