// SPDX-FileCopyrightText: 2022 - 2023 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2022 - 2023 dv4all
// SPDX-FileCopyrightText: 2023 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2023 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

import {useFormContext} from 'react-hook-form'
import {useSession} from '~/auth'
import ControlledSwitch from '~/components/form/ControlledSwitch'
import config from './generalSettingsConfig'
import AutosaveOrganisationTextField from './AutosaveOrganisationTextField'
import useSnackbar from '~/components/snackbar/useSnackbar'
import {patchOrganisationTable} from '../updateOrganisationSettings'

export default function AdminSection() {
  const {token} = useSession()
  const {showErrorMessage} = useSnackbar()
  const {watch, control, resetField} = useFormContext()
  const [
    id, slug, primary_maintainer, is_tenant
  ] = watch([
    'id', 'slug', 'primary_maintainer', 'is_tenant'
  ])

  async function saveIsTenant(value:boolean) {
    const resp = await patchOrganisationTable({
      id,
      data: {
        is_tenant:value
      },
      token
    })

    if (resp?.status === 200) {
      // debugger
      resetField('is_tenant', {
        defaultValue:value
      })
    } else {
      showErrorMessage(`Failed to save official member. ${resp?.message}`)
    }
  }

  return (
    <>
      <section className="grid grid-cols-[1fr,1fr] gap-8">
        <AutosaveOrganisationTextField
          options={{
            name: 'slug',
            label: config.slug.label,
            useNull: true,
            defaultValue: slug,
            helperTextMessage: config.slug.help,
            helperTextCnt: `${slug?.length || 0}/${config.slug.validation.maxLength.value}`
          }}
          rules={config.slug.validation}
        />
        <AutosaveOrganisationTextField
          options={{
            name: 'primary_maintainer',
            label: config.primary_maintainer.label,
            useNull: true,
            defaultValue: primary_maintainer,
            helperTextMessage: config.primary_maintainer.help,
            helperTextCnt: `${primary_maintainer?.length || 0}/${config.primary_maintainer.validation.maxLength.value}`,
          }}
          rules={config.primary_maintainer.validation}
        />
      </section>
      <div className="py-2"></div>
      <ControlledSwitch
        name='is_tenant'
        label={config.is_tenant.label}
        control={control}
        defaultValue={is_tenant}
        onSave={saveIsTenant}
      />
      {/* additional spacing for About page */}
      <div className="py-4"></div>
    </>
  )
}
