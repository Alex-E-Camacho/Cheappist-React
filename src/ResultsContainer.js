import React from 'react';
import Submission from './Submission';

const ResultsContainer = ({results}) => {
  if (!results) {
    return <div>null</div>;
  };

  const searchResults = results.map((submission) => {
    return (
      <Submission
        submission={submission}
        key={submission.id}
      />
    )
  })

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Brand</th>
            <th>Item</th>
            <th>Price</th>
            <th>Date Purchased</th>
          </tr>
            {searchResults}
            </tbody>
      </table>
    </div>
  )
}

export default ResultsContainer;
