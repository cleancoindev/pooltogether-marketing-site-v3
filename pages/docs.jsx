import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { FaqPage } from 'lib/components/FaqPage'

export default function Docs(props) {

  return <PageContainer
    pageTitle='Frequently Asked Questions'
    pageComponent={<FaqPage />}
  />

}