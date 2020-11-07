import React from 'react';
import './activity.scss';
import { Tabs } from 'antd';

export default function Activity() {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Training" key="1">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Webinar" key="1">
          </TabPane>
          <TabPane tab="Peer-to-Peer" key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="Еntertainment" key="2">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Events" key="1">
          </TabPane>
          <TabPane tab="Private lessons" key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </TabPane>
    </Tabs>
  );
}
