// SPDX-FileCopyrightText: 2023 Christian Meeßen (GFZ) <christian.meessen@gfz-potsdam.de>
// SPDX-FileCopyrightText: 2023 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2023 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2023 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences
// SPDX-FileCopyrightText: 2023 Netherlands eScience Center
// SPDX-FileCopyrightText: 2023 dv4all
//
// SPDX-License-Identifier: Apache-2.0

import {useRouter} from 'next/router'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DescriptionIcon from '@mui/icons-material/Description'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import SpellcheckIcon from '@mui/icons-material/Spellcheck'
import DomainAddIcon from '@mui/icons-material/DomainAdd'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FluorescentIcon from '@mui/icons-material/Fluorescent'
import CampaignIcon from '@mui/icons-material/Campaign'
import BugReportIcon from '@mui/icons-material/BugReport'

export const adminPages = {
  pages:{
    title: 'Public pages',
    subtitle: 'Manage markdown pages',
    icon: <DescriptionIcon />,
    path: '/admin/public-pages',
  },
  softwareHighlights:{
    title: 'Software highlights',
    subtitle: 'Manage software highlights',
    icon: <FluorescentIcon />,
    path: '/admin/software-highlights',
  },
  orcid:{
    title: 'ORCID users',
    subtitle: 'Manage ORCID users',
    icon: <PlaylistAddCheckIcon />,
    path: '/admin/orcid-users',
  },
  accounts:{
    title: 'RSD users',
    subtitle: 'Manage RSD accounts',
    icon: <PersonRemoveIcon />,
    path: '/admin/rsd-users',
  },
  contributors:{
    title: 'RSD contributors',
    subtitle: 'Manage RSD contributors',
    icon: <AccountCircleIcon />,
    path: '/admin/rsd-contributors',
  },
  organisations: {
    title: 'Organisations',
    subtitle: 'Manage organisation entries',
    icon: <DomainAddIcon />,
    path: '/admin/organisations',
  },
  keywords:{
    title: 'Keywords',
    subtitle: 'Manage keyword entries',
    icon: <SpellcheckIcon />,
    path: '/admin/keywords',
  },
  logs:{
    title: 'Error logs',
    subtitle: 'From background services',
    icon: <BugReportIcon />,
    path: '/admin/logs',
  },
  announcements: {
    title: 'Announcement',
    subtitle: 'Notification to all users',
    icon: <CampaignIcon />,
    path: '/admin/announcements',
  }
}

// extract page types from the object
type pageTypes = keyof typeof adminPages
// extract page properties from forst admin item
type pageProps = typeof adminPages.accounts

export default function AdminNav() {
  const router = useRouter()
  const items = Object.keys(adminPages)

  return (
    <nav>
      <List sx={{
        width:['100%','100%','17rem']
      }}>
        {items.map((key, pos) => {
          const item:pageProps = adminPages[key as pageTypes]
          return (
            <ListItemButton
              data-testid="admin-nav-item"
              key={`step-${pos}`}
              selected={item.path === router.route}
              onClick={() => router.push(item.path)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.subtitle} />
            </ListItemButton>
          )
        })}
      </List>
    </nav>
  )
}
