import React from 'react';
import './FilmsPage.css'

// import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ListLayout from '../../layouts/ListLayout/ListLayout';

const FilmsPage = () => (
  <ListLayout path="films" pathDetail="filmDetail/" titleKey="title" textKey="opening_crawl" name="Film"  Src={`https://images.unsplash.com/photo-1518331539918-7a2dbf839306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80`} />
)

export default FilmsPage;