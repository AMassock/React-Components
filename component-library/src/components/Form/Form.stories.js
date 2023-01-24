import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
    .add('Default', () => <Form />)
    .add('Email', () => <Form label='email'/>)