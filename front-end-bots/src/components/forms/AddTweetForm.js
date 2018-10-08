import React from 'react';
import { Form, Link } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class AddTweetForm extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            errors: {}
        }
    }

    onSubmit = () => {
        this.props.submit(this.state.data);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field >
                    <label htmlFor="hashtags">Hashtags</label>
                    <input
                        type="hashtags"
                        id="hashtags"
                        name="hashtags"
                        placeholder="Hashtags"
                        value={data.hashtags} />
                </Form.Field>
                <Form.Field >
                    <label htmlFor="url">Url</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        placeholder="url"
                        value={data.url} />
                </Form.Field>
                <Form.Field >
                    <label htmlFor="content">Content</label>
                    <input
                        type="content"
                        id="content"
                        name="content"
                        placeholder="Content"
                        value={data.content} />
                </Form.Field>
                <Button primary>Save Tweet</Button>
            </Form>
        );
    }
}

AddTweetForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default AddTweetForm;