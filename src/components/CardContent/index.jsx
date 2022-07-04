import React from 'react'

import 'ds-in-code-design-system/dist/components/card'
import 'ds-in-code-design-system/dist/components/tag'
import 'ds-in-code-design-system/dist/components/typography'

import './cardContent.scss';

export const CardContent = ({
  tagContent,
  headingContent,
  paragraphContent
}) => {
  return (
    <dsc-card class='dscTeamCardContent'>
      <dsc-tag>{ tagContent }</dsc-tag>
      <dsc-typography variant="h2" component="heading" size="lg">{ headingContent }</dsc-typography>
      <dsc-typography component="paragraph">{ paragraphContent }</dsc-typography>
    </dsc-card>  
  )
}
