import React from 'react';
import IntroductionMd from './Introduction.md';
import InstallationMd from './Installation.md';
import StyleMd from './Style.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('- Welcome', module)
  .add('Introduction', withDocs(IntroductionMd, () => <div />))
  .add('Installation', withDocs(InstallationMd, () => <div />))

storiesOf('-- Customize', module)
  .add('Style', withDocs(StyleMd, () => <div />))
  
