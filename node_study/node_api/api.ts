import express from 'express';
import { DataStore } from './dealData';

const app = express();

app.get('/user', (req, res) => {
  res.json(DataStore.list);
})

app.listen(8080, () => {
  console.log('server start');
})