import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import {CNavGroup, CNavItem, CNavTitle} from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Claim Operations',
  },
  {
    component: CNavGroup,
    name: 'My Bills',
    to: '/claims',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Bulk uploads',
        to: '/claims/bulk-billing-csv',
      },
      {
        component: CNavItem,
        name: 'Recieved',
        to: '/claims/claim-review/received',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Configuration',
    to: '/claims',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Carriers',
        to: '/configuration/insurance-carriers',
      },
      {
        component: CNavItem,
        name: 'Providers',
        to: '/configuration/referring-providers',
      },
      {
        component: CNavItem,
        name: 'Rules',
        to: '/configuration/processing-rules',
      },
      {
        component: CNavItem,
        name: 'My Team',
        to: '/configuration/my-team',
      },
      {
        component: CNavItem,
        name: 'HL7 test tool',
        to: '/configuration/hl7-tester',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Insights',
  },
  {
    component: CNavGroup,
    name: 'Analytcs',
    to: '/claims',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Overview',
        to: '/analytics/overview',
      },
      {
        component: CNavItem,
        name: 'Claims',
        to: '/analytics/claims',
      },
      {
        component: CNavItem,
        name: 'Payments',
        to: '/analytics/payments',
      },
      {
        component: CNavItem,
        name: 'Denials',
        to: '/analytics/denials',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Tools',
  },
  {
    component: CNavGroup,
    name: 'Tools',
    to: '/tools',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'HL7 test tool',
        to: '/tools/hl7-test-tool',
      },
    ],
  },
]

export default _nav
