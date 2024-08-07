import React from 'react'
import EmptyView from "./views/app-views/EmptyView";
import ClaimReview from "./features/claim-review/ClaimReview";
import RuleBoxes from "./features/rules-engine/RuleBoxes";
import Recieved from "./features/claim-review/Recieved";
import RecievedClaims from "./features/claim-review/Recieved";

const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard'))
const Login = React.lazy(() => import('./features/login/Login'))
const HL7Summary = React.lazy(() => import('./features/reports/Hl7SummaryReport'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Overview', element: EmptyView },
  { path: '/claims', name: 'My Claims', element: EmptyView, exact: true },
  { path: '/claims/bulk-billing-csv', name: 'bulk-billing-csv', element: EmptyView },
  { path: '/claims/bulk-voiding-csv', name: 'bulk-voiding-csv', element: EmptyView },
  { path: '/claims/bulk-approve', name: 'bulk-approve', element: EmptyView },
  { path: '/claims/bulk-writeoff', name: 'bulk-writeoff', element: EmptyView },
  { path: '/configuration/hl7-tester', exact: true, name: 'hl7-tester' , element: EmptyView},
  { path: '/configuration/insurance-carriers', name: 'insurance-carriers', element: EmptyView },
  { path: '/configuration/referring-providers', name: 'referring-providers', element: EmptyView, exact: true },
  { path: '/configuration/processing-rules', name: 'processing-rules', element: EmptyView },
  { path: '/configuration/correction-rules', name: 'correction-rules', element: EmptyView },
  { path: '/configuration/rejection-rules', name: 'rejection-rules', element: EmptyView },
  { path: '/configuration/templates', name: 'templates', element: EmptyView },
  { path: '/configuration/my-team', name: 'my-team', element: EmptyView },
  { path: '/analytics/overview', name: 'correction-rules', element: EmptyView },
  { path: '/analytics/claims', name: 'rejection-rules', element: EmptyView },
  { path: '/analytics/payments', name: 'templates', element: EmptyView },
  { path: '/analytics/denials', name: 'my-team', element: EmptyView },
  { path: '/reports/received-claims-summary', name: 'received-claims-summary', element: HL7Summary, exact: true },

  // Claim Review
  { path: '/claims/claim-review/:id', name: 'claim-review', element: ClaimReview, exact: true },
  { path: '/claims/claim-review/received', name: 'claim-review-received', element: RecievedClaims, exact: true },

  // Rules Engine
  { path: '/rules-engine/rule-boxes', name: 'rule-boxes', element: RuleBoxes, exact: true },


  { path: '/login', name: 'login', element: Login },
]

export default routes
