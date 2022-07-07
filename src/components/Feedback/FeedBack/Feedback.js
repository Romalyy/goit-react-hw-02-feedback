import React from 'react';
import { nanoid } from 'nanoid'
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsBts = options.map(option => (
                <button
                    key={nanoid()}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
					{option}
				</button>
    ));
    
    return (
        <>
			{optionsBts}
		</>
    );
}

FeedbackOptions.defaultProps = {
    options: [],
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired),
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;