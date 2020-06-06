import React from 'react';
import './PlanetsPage.css';

// import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ListLayout from '../../layouts/ListLayout/ListLayout';

const PlanetsPage = () => {
  return (
    <ListLayout path="planets" pathDetail="planetDetail/" titleKey="name" textKey="terrain" name="Planet" Src={`https://images5.alphacoders.com/843/thumb-1920-843440.jpg`} />
  )
}
export default PlanetsPage;