import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchFiield: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crash', () => {
    expect(wrapper).toMatchSnapshot();
})

it('it filters robots correctly', () => {
    expect(wrapper).toMatchSnapshot();
})