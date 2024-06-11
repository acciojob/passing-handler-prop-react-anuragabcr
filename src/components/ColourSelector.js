import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={config.classname} data-testid={config.key} onClick={() => selectNextBackground({background: config.key})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
