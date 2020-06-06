import React from 'react';

import ListLayout from '../../layouts/ListLayout/ListLayout'

const PeoplePage = () => (

  <ListLayout path="people/" pathDetail="peopleDetail/" titleKey="name" textKey="birth_year" name="Person" Src={`https://images3.alphacoders.com/669/thumb-1920-669177.png`} />
)

export default PeoplePage;