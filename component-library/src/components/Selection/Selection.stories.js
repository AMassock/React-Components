import React from 'react';
import { storiesOf } from '@storybook/react';

import Selection from './Selection';

storiesOf('Selection', module)
    .add('Default', () => <Selection />)
    .add('Selection', () => <Selection label='Email'/>)
    .add('Selection-Med', () => <Selection label='Email' med/>)
    .add('Selection-lrg', () => <Selection label='Email' large/>)