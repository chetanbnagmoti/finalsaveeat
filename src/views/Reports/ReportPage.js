import React from 'react'
import BrandPanelLayout from '../../components/Layouts/BrandPanelLayout'
import { Box } from '@mui/material'
import TabComp from '../../components/Report/Report_tabs'

const ReportPage = () => {
  return (
    <>
        <BrandPanelLayout>
          <Box>
            <TabComp />
          </Box>
        </BrandPanelLayout>
    </>
  )
}

export default ReportPage