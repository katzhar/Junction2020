import React from 'react';
import {Link} from 'react-router-dom';
import { data } from '../../data';
import { Table, Tag} from 'antd';
import styles from './rating.module.scss';

const columns = [
  {
    title: 'Place',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'User',
    dataIndex: ['name', 'id'],
    key: 'key',
      render: (name , item) => 
      <Link to={`/main/${item.id}`}>
       {item.name}
      </Link>
  },
  {
    title: 'Scores',
    dataIndex: 'rating',
    key: 'rating',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 6 ? 'geekblue' : 'green';
          if (tag === 'art') {
            color = 'volcano';
          }
          if (tag === 'history') {
            color = 'orange';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  }
];
class Rating extends React.Component {
  state = {
    top: 'none',
    bottom: 'none',
  };
  render() {
    return (
      <div className={styles.table}>
        <Table
          columns={columns}
          dataSource={data.users}
          pagination={false}
        />
      </div>
    );
  }
}

export default Rating;