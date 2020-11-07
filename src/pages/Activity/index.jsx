import React from 'react';
import './activity.scss';
import { Tabs } from 'antd';
import Block from '../../components/Block'

export default function Activity() {

  const data = {
    title: 'Let\'s have a Harry Potter viewing marathon',
      body: 'Guys, the New Year is coming and ' +
        'I want some magic, on December 28 I invite everyone to see all ' +
        'the parts of Harry Potter! It will be fun!',
      creator: {
      fname: 'Kate',
        lname: 'Kate',
      },
     participants: ['user1 ', 'user2 ', 'user3 '] ,
  };

  const { TabPane } = Tabs;
  return (
    <Tabs type="card" defaultActiveKey="1">
      <TabPane tab="Training" key="1">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Webinar" key="1">
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </TabPane>
          <TabPane tab="Peer-to-Peer" key="2">
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="Еntertainment" key="2">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Events" key="1">
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </TabPane>
          <TabPane tab="Private lessons" key="2">
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </TabPane>
        </Tabs>
      </TabPane>
    </Tabs>
  );
}
