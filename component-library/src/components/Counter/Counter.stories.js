import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter from './Counter';

storiesOf('Counter', module)
    .add('Default', () => <Counter />)
    .add('Counter', () => <Counter start={0} min={0} max={100} value={1} />)