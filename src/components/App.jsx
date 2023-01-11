// Core
import { useState } from 'react';

// Styles
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

// Components
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        throw new Error('There is no such option');
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  const options = ['good', 'neutral', 'bad'];

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>

      <GlobalStyle />
    </Layout>
  );
};
