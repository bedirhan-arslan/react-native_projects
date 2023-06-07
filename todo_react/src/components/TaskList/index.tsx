import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import Empty from './Empty';
import { Task as TaskInterface } from '../../screens/Home';
import Task from '../Task';

// import { Container } from './styles';
interface TaskListProps {
  tasks: TaskInterface[];
  onUpdateStatus: (id:string) => void;
  onRemove: (id:string) => void;
}
const TaskList: React.FC<TaskListProps> = ({tasks, onUpdateStatus, onRemove}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(data) => data.id}
        renderItem={(data) => (
          <Task
            task={data.item}
            onUpdateStatus={onUpdateStatus}
            onRemove={onRemove}
          />
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.tasksList}
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  );
}

export default TaskList;