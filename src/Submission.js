import React from 'react';

const Submission = ({submission}) => {
  if (!submission) {
    return null;
  };

  return (
    <p>
      <div>
        <p>{submission.brand}</p>
        <p>{submission.description}</p>
        <p>{submission.price}</p>
        <p>{submission.date_purchased}</p>
      </div>
    </p>
  )
}

export default Submission;
