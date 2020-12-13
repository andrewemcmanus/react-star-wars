// import React, { Component } from 'react';
import StarshipPage from './StarshipPage';
import React, { useState } from 'react';
import axios from 'axios';

function StarshipButtons(props) {

  const nameButtons = props.map(<Link
    to={{
      pathname: '/starship',
      state: starship
    }}
    key={starship.name}
  >
    {{starship.name}}
  </Link>

    return (
      <div className="pane">
      {nameButtons}
      </div>
    )

export default StarshipButtons;
