import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addBadFeadback = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  addNeutralFeadback = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  addGoodFeadback = () => {
    this.setState({ good: this.state.good + 1 });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addBadFeadback={this.addBadFeadback}
            addNeutralFeadback={this.addNeutralFeadback}
            addGoodFeadback={this.addGoodFeadback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.bad > 0 ||
          this.state.neutral > 0 ||
          this.state.good > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
