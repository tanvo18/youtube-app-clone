import React from 'react';
import ChannelDescription from './ChannelDescription';
import renderer from 'react-test-renderer';

const props = {
  channelTitle: 'Funny channel',
  publishedAt: 'Oct 15th 18',
  description: 'Download / stream BEAUTIFUL: https://Bazzi.lnk.to/BeautifulxCamilaAY \nCOSMIC: https://Bazzi.lnk.to/COSMICAY\n\nDirected by Jason Koenig https://www.instagram.com/jkoephoto/ \n\nSubscribe for more official content from Bazzi: https://Bazzi.lnk.to/Subscribe\n\nFollow Bazzi\nhttps://facebook.com/BazziWorldwide\nhttps://instagram.com/bazzi\nhttps://twitter.com/bazzi\nhttps://soundcloud.com/bazziworldwide\nhttp://bazziofficial.com\n\nThe official YouTube channel of Atlantic Records artist Bazzi. Subscribe for the latest music videos, performances, and more.'
};

describe('test channelDescription', () => {
  const wrapper = shallow(<ChannelDescription {...props} />);

  it('test render channelTitle', () => {
    expect(wrapper.find('p').at(0).text()).toBe('Funny channel');
    expect(wrapper.find('p').at(0).text()).not.toBe('Funny ');
  });

  it('test render publishedAt', () => {
    expect(wrapper.find('p').at(1).text()).toBe('Oct 15th 18');
  });

  it('test not pass props', () => {
    const wrapper = shallow(<ChannelDescription />);
    expect(wrapper.find('p').at(0).text()).toBe('');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<ChannelDescription {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});