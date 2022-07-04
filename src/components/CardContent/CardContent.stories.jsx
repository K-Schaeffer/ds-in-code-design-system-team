import React from 'react';

import { CardContent } from '.';

export default {
  title: 'Team Component/Card Content',
  component: CardContent
}

const Template = (args) => {
  return (  
    <div style={{
      width: '314px',
      height: '417px'
    }}>
      <CardContent {...args} />
    </div>
  )
}

export const CardContentTemplate = Template.bind({})

CardContentTemplate.args = {
  tagContent: 'Tag Highlight',
  headingContent: 'Heading',
  paragraphContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
}
