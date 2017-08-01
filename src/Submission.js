import React from 'react';

const Submission = ({submission}) => {
  if (!submission) {
    return null;
  };

  return (
        <tr>
          <td>{submission.brand}</td>
          <td>{submission.description}</td>
          <td>{submission.price}</td>
          <td>{submission.date_purchased}</td>
        </tr>
  )
}

export default Submission;
