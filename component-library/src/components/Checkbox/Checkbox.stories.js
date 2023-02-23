import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
    .add('Default', () => <Checkbox />)
    .add('Checkbox', () => <Checkbox label='Do not show again' color="blue" />)
