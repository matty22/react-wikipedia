import React from 'react';
import './ResultsDisplay.css';

const resultsDisplay = (props) => (
    <a className="resultsLink" href={'https://en.wikipedia.org/wiki/' + props.title }>
      <p>{ props.title }</p>
    </a>
);

export default resultsDisplay;