import React from 'react';
import { shallow, mount, render } from 'enzyme';

class Foo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
      const { count } = this.state;
      return (
        <div>
          <div className={`clicks-${count}`}>
            {count} clicks
          </div>
          <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
            Increment
          </a>
        </div>
      );
    }
  }
  
  it('should change the stats', () => {
    const wrapper = mount(<Foo />);
    expect(wrapper.find('.clicks-0').length).toEqual(1);
    wrapper.find('a').simulate('click');
    
    expect(wrapper.find('.clicks-1').length).toEqual(1);
  })