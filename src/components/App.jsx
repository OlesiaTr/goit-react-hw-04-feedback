// Core
import { Component } from 'react';

// Styles
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

// Components
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }
}
