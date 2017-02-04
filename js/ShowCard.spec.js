import React from 'react'
import ShowCard from './ShowCard'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'


test('Search snapshot test', () => {
  const component = shallow(<ShowCard />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

