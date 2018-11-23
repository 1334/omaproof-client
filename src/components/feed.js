import React from 'react';
import { Input, Button, Avatar } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import faker from 'faker';

class Feed extends React.Component {
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  render() {
    return (
      <div className="feed">
        <Button
          variant="fab"
          color="primary"
          className={this.props.classes.absolute}
        >
          +
        </Button>
        <h1>Feed</h1>
        {this.nums.map(num => (
          <div className="post" key={num}>
            <h2>{faker.lorem.text()}</h2>
            <img
              src="https://placeimg.com/750/400/nature"
              alt={faker.lorem.words()}
            />
            <div className="comments">
              {this.nums
                .slice(1, Math.floor(Math.random() * this.nums.length))
                .map(num => (
                  <div className="comment" key={num}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://placeimg.com/200/200/people"
                    />
                    <div className="name">
                      {faker.name.findName()} {faker.name.lastName()}
                    </div>
                    <div className="comment">{faker.lorem.sentence()}</div>
                  </div>
                ))}
            </div>
            <div className="new-comment">
              <Input placeholder="enter comment" />
              <Button color="primary">Add a comment</Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default withStyles({})(Feed);
