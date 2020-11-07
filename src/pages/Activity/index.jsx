import React from 'react';
import './activity.module.scss';
import { Tabs } from 'antd';
import Block from '../../components/Block';
import styles from './activity.module.scss';

export default function Activity() {

  const data = {
    title: 'Let\'s have a Harry Potter viewing marathon',
    type: 'book',
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
        <Tabs defaultActiveKey="1">
          <TabPane tab="Webinar" key="1">
            <div className={styles.blocks}>
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            </div>
          </TabPane>
          <TabPane tab="Peer-to-Peer" key="2">
          <div className={styles.blocks}>
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </div>
          </TabPane>
          <TabPane tab="Events" key="3">
          <div className={styles.blocks}>
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
          </div>
          </TabPane>
          <TabPane tab="Private lessons" key="4">
          <div className={styles.blocks}>
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
            <Block data={data} />
          </div>
          </TabPane>
    </Tabs>
  );
}
