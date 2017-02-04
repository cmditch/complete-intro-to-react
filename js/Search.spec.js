import React from 'react'
import Search from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
// import renderer from 'react-test-renderer'

import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// test('Search snapshot test', () => {
//   const component = renderer.create(<Search />)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('test should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target:{value:searchWord}})
  const showCount = preload.shows.filter((show) => {return `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0}).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})