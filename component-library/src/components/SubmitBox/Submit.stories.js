import React from 'react';
import { storiesOf } from '@storybook/react';

import Submit from './Submit';

storiesOf('Submit', module)
    .add('Default', () => <Submit btn='Submit'/>)
    .add('Submit', () => <Submit label='Promo Code' btn='Redeem' />)
    .add('Submit-Med', () => <Submit btn='Check' med />)
    .add('Submit-lrg', () => <Submit label='Promo Code' btn='Send' large />)