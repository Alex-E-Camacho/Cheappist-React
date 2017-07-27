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
      />
    )
  })

  return (
    <div>
      {searchResults}
    </div>
  )
}

export default ResultsContainer;
