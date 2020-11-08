import React from 'react';
import { data } from '../../data';
import { Table, Tag} from 'antd';
import Text from 'antd/lib/typography/Text';

const columns = [
  {
    title: 'Place',
    dataIndex: 'key',
    key: 'key',
    render: text => <a>{text}</a>
  },
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
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