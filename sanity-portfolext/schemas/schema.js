import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import featuredProject from './featuredProject'
import otherProject from './otherProject'
import caseStudy from './caseStudy'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([featuredProject, otherProject, caseStudy]),
})