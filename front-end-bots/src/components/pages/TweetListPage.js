import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';
import MDSpinner from 'react-md-spinner';

class TweetListPage extends React.Component{

    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
            errors: {},
           
        }
    }

}

export default TweetListPage;