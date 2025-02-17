// SPDX-FileCopyrightText: 2021 - 2022 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2021 - 2022 dv4all
// SPDX-FileCopyrightText: 2022 - 2023 Christian Meeßen (GFZ) <christian.meessen@gfz-potsdam.de>
// SPDX-FileCopyrightText: 2022 - 2023 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences
// SPDX-FileCopyrightText: 2023 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2023 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

import {JSX} from 'react'

export type MenuItemType = {
  type?: 'link' | 'function' |'divider'
  label: string,
  // used as url link
  path?: string,
  // used to match value for active page/section menu highlighting
  match?: string,
  // used to customize menu items per user/profile
  active?: boolean
  icon?: JSX.Element,
  // optional, but fn is provided it will have higher priority
  // than path
  fn?: Function,
}
// routes defined for nav/menu
// used in components/AppHeader
export const menuItems:MenuItemType[] = [
  {path: '/software?order=mention_cnt', match:'/software', label:'Software'},
  {path: '/projects?order=impact_cnt', match: '/projects', label: 'Projects'},
  {path: '/organisations', match: '/organisations', label: 'Organisations'}
]
