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
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
    name: 'Insurance/Client Bills',
    to: '/claims',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bulk billing',
        to: '/claims/bulk-billing-csv',
      },
      {
        component: CNavItem,
        name: 'Bulk void',
        to: '/claims/bulk-voiding-csv',
      },
      {
        component: CNavItem,
        name: 'Bulk approve',
        to: '/claims/bulk-approve',
      },
      {
        component: CNavItem,
        name: 'Bulk write-off',
        to: '/claims/bulk-writeoff',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Configuration',
    to: '/claims',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'HL7 tester',
        to: '/configuration/hl7-tester',
      },
      {
        component: CNavItem,
        name: 'Insurance Carriers',
        to: '/configuration/insurance-carriers',
      },
      {
        component: CNavItem,
        name: 'Referring providers',
        to: '/configuration/referring-providers',
      },
      {
        component: CNavItem,
        name: 'Processing rules',
        to: '/configuration/processing-rules',
      },
      {
        component: CNavItem,
        name: 'Correction rules',
        to: '/configuration/correction-rules',
      },
      {
        component: CNavItem,
        name: 'Rejection rules',
        to: '/configuration/rejection-rules',
      },
      {
        component: CNavItem,
        name: 'Templates',
        to: '/configuration/templates',
      },
      {
        component: CNavItem,
        name: 'My Team',
        to: '/configuration/my-team',
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
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
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
    component: CNavGroup,
    name: 'Reports',
    to: '/reports',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'HL7 summary',
        to: '/reports/received-claims-summary',
      },
    ],
  },
]

export default _nav
