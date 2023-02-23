import React from 'react';
import { storiesOf } from '@storybook/react';

import Selection from './Selection';

storiesOf('Selection', module)
    .add('Default', () => <Selection placeholder ="Select..." />)
    .add('Selection', () => <Selection placeholder ="Select..." label='select'/>)
    .add('Selection-Med', () => <Selection placeholder ="Select..." label='select' med/>)
    .add('Selection-lrg', () => <Selection placeholder ="Select..." label='select' large/>)