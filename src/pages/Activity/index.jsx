import React, { useEffect, useState } from 'react';
import './activity.module.scss';
import { Tabs } from 'antd';
import Block from '../../components/Block';
import styles from './activity.module.scss';
import { data } from '../../data';

export default function Activity() {
const [newData, setNewData] = useState({
    webinar: [],
    ptp: [],
    events:[],
    lessons: [],
  });
  const [localData, setLocalData] = useState(data);

  useEffect(()=>{
      let users = localData.users;
      let events = localData.scienceEvents.Consultations;
      let tmpData = events.map((item) => {
        let user = users.filter(i => i.id === item.organazierId);

         let participants = (item.participants) ? item.participants.map((participant)=>{
           return users[participant];
         }): null;


        return{...item,user,participants}
      })
     let tmp =  {
        webinar: [],
          ptp: [],
        events:[],
        lessons: [],
      }
       tmp.webinar = tmpData.filter(i => i.type === 'webinar');
      tmp.ptp = tmpData.filter(i => i.type === 'ptp');
      tmp.events = tmpData.filter(i => (i.type === 'event' || i.type === 'book' || i.type ==='film'));
      tmp.lessons = tmpData.filter(i => i.type === 'lessons');
      setNewData(tmp);
    },
   [localData] )

  const { TabPane } = Tabs;
  return (
        <Tabs defaultActiveKey="1">
          <TabPane tab="Webinar" key="1">
            <div className={styles.blocks}>
              {newData.webinar.map((item)=> <Block data={item} />)}
            </div>
          </TabPane>
          <TabPane tab="Peer-to-Peer" key="2">
          <div className={styles.blocks}>
            {newData.ptp.map((item)=> <Block data={item} />)}
          </div>
          </TabPane>
          <TabPane tab="Events" key="3">
          <div className={styles.blocks}>
            {newData.events.map((item)=> <Block data={item} />)}
          </div>
          </TabPane>
          <TabPane tab="Private lessons" key="4">
          <div className={styles.blocks}>
            {newData.lessons.map((item)=> <Block data={item} />)}
          </div>
          </TabPane>
    </Tabs>
  );
}
