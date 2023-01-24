
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Default', () => <Button label="Default" />)
    .add('Primary', () => <Button label="Primary" type="primary" />) 
    .add('Danger', () => <Button label="Danger" type="danger" />)
    .add('Warning', () => <Button label="Warning" type="warning" />)
    .add('Success', () => <Button label="Success" type="success" large />)
    .add('Large Primary', () => <Button label="Large Primary Button" type="primary" large />)