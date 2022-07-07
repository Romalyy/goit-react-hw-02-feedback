import React, { Component } from 'react';

import FeedbackOptions from './Feedback/FeedBack/Feedback';
import Section from './Feedback/Section/Section';
import Notifications from './Feedback/Notification/Notifications';
import Statistics from './Feedback/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  }

  countPositiveFeedbackPercentage() {
    const sum = this.countTotalFeedback();
    const { good } = this.state;
    const positiveFeedback = (good * 100) / sum;
		return Math.round(positiveFeedback);
  }

  onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
  
  render() {
  	const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		// const objKey = Object.keys(this.state);
    return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notifications message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</>
		);
  }
}

export default App;