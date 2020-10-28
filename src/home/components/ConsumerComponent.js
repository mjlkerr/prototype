import React, {useState, useMemo} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {createConsumer} from '@rails/actioncable';

global.addEventListener = () => {};
global.removeEventListener = () => {};

const cable = 'ws://sub1.bfs-dev.com:3000/cable';

const consumer = createConsumer(cable);

const ConsumerComponent = () => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const insightsData = useMemo(() => {
    return consumer.subscriptions.create(
      {
        channel: 'SocketToMeChannel',
        route: 'insights#export_metric_details',
        microsite_id: 19,
      },
      {
        received(data) {
          console.log('data');
          console.log(data);
          setMessages((messages) => messages.concat(data.content));
        },
      },
    );
  }, []);
  const inputSubmitted = (event) => {
    console.log('submitted');
    console.log(event);
    const newMessage = 'hi';
    console.log(insightsData);
    insightsData.send({message: newMessage});
    setValue('');
  };
  return (
    <>
      <Text>Consumer stuff</Text>
      <Button onPress={inputSubmitted} title="Do the thing!" color="#526b2d" />
    </>
  );
};

export default ConsumerComponent;
