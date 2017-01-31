/* eslint-disable no-unused-vars */

jest.unmock('../src/js/components/GlobalHeader');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GlobalHeader from '../src/js/components/GlobalHeader';


describe('GlobalHeader', () => {

  let headerData = [
    { text: "Test", link: "/test1/" },
    { text: "Test 2", link: "/test2/" }
  ];

     
  const output = TestUtils.renderIntoDocument(
    <GlobalHeader data={headerData}/>
  );

  const theNode = ReactDOM.findDOMNode(output);

  it('Has the correct text in logo', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('h2.header--logo')).map(h => h.textContent);
    expect(textNode).toEqual(['Find-A-Venue']);
  });


  it('Has the correct Text in the menu links', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('.menuUl a')).map(h => h.textContent);
    expect(textNode).toEqual(['Test', 'Test 2']);
  });

  it('Has the correct links in the menu', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('.menuUl a')).map(h => h.href);
    expect(textNode).toEqual(['/test1/', '/test2/']);
  });


});