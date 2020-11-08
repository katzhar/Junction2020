import React from 'react';
import {Link} from 'react-router-dom';
import { data } from '../../data';
import { Table, Tag} from 'antd';

const columns = [
  {
    title: 'place',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'User',
    dataIndex: 'id',
    key: 'id',
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
    render: text => <Link to={`/main/${text}`}>hello</Link>
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
      <div>
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