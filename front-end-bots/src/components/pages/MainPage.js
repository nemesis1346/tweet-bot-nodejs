import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Main Menu</h1>
                <Link to="/addTweet">
                    <Button primary>
                        Add Tweet
                    </Button>
                </Link>
                <Link to="/listTweets">
                    <Button primary>
                        Get List of Tweets
                    </Button>
                </Link>
                <Link to="/settings">
                    <Button primary>
                        Settings
                    </Button>
                </Link>
            </div>
        );
    }

}


export default MainPage;