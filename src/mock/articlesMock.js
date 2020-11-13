import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';


mock.onGet('/api/analysis/graph').reply(200, {
  sentiments: {
    datasets: [
      {
        data: [56, 24, 20],
        backgroundColor: ['#4b9e86','#3d72eb', '#b658f5']
      }
    ],
    labels: ['Positivo', 'Neutro', 'Negativo'],
  }
});

mock.onGet('/api/analysis/sentiments').reply(200, {
  articlesSentiments: [
    {
      id: uuidv4(),
      title: 'Primeira noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Positivo',
        value: 1
      }
    },
    {
      id: uuidv4(),
      title: 'Segunda noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Negativo',
        value: -1
      }
    },
    {
      id: uuidv4(),
      title: 'Terceira noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Neutro',
        value: 0
      }
    },
    {
      id: uuidv4(),
      title: 'Quarta noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Neutro',
        value: 0
      }
    },
    {
      id: uuidv4(),
      title: 'Quinta noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Positivo',
        value: 1
      }
    },
    {
      id: uuidv4(),
      title: 'Sexta noticia',
      source: 'Valor investe',
      sentiments: {
        label : 'Negativo',
        value: -1
      }
    },
  ]
});

mock.onGet('/api/reports/tasks').reply(200, {
  tasks: [
    {
      id: uuidv4(),
      title: 'Update the API for the project',
      deadline: moment()
        .add(1, 'days')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_3.png',
      ]
    },
    {
      id: uuidv4(),
      title: 'Redesign the landing page',
      deadline: moment()
        .add(2, 'day')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        '/static/images/avatars/avatar_8.png',
        '/static/images/avatars/avatar_10.png',
        '/static/images/avatars/avatar_12.png'
      ]
    },
    {
      id: uuidv4(),
      title: 'Solve the bug for the showState',
      deadline: moment()
        .toDate()
        .getTime(),
      members: ['/static/images/avatars/avatar_7.png']
    },
    {
      id: uuidv4(),
      title: 'Release v1.0 Beta',
      deadline: null,
      members: [
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_10.png']
    },
    {
      id: uuidv4(),
      title: 'GDPR Compliance',
      deadline: null,
      members: [
        '/static/images/avatars/avatar_5.png',
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_6.png'
      ]
    },
    {
      id: uuidv4(),
      title: 'Redesign Landing Page',
      deadline: null,
      members: ['/static/images/avatars/avatar_8.png']
    }
  ]
});
