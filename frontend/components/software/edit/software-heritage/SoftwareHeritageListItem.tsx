// SPDX-FileCopyrightText: 2022 - 2023 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2022 - 2023 dv4all
// SPDX-FileCopyrightText: 2022 Dusan Mijatovic (dv4all) (dv4all)
// SPDX-FileCopyrightText: 2025 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2025 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

import SortableListItem from '~/components/layout/SortableListItem'
import {SoftwareHeritageItem} from './apiSoftwareHeritage'

export type SortableTestimonialItem = {
  pos: number,
  item: SoftwareHeritageItem
  onEdit:(pos:number)=>void,
  onDelete:(pos:number)=>void,
}

export default function SoftwareHeritageListItem({pos,item,onEdit,onDelete}:SortableTestimonialItem){
  // split swhid and use only id origin (assuming origin is at second position!)
  const [swh, origin] = item.swhid.split(';')
  return (
    <SortableListItem
      data-testid="software-heritage-list-item"
      key={item.id}
      pos={pos}
      item={item}
      onEdit={onEdit}
      onDelete={onDelete}
      sx={{
        '&:hover': {
          backgroundColor:'grey.100'
        },
      }}
    >
      <ListItemAvatar>
        <span className='text-[3rem]'>{item?.position}</span>
      </ListItemAvatar>
      <ListItemText
        data-testid="software-heritage-list-item-text"
        primary={swh}
        // remove origin= and show only url
        secondary={origin?.replace('origin=','') ?? null}
      />
    </SortableListItem>
  )
}
