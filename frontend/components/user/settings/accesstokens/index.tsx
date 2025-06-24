// SPDX-FileCopyrightText: 2025 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences
// SPDX-FileCopyrightText: 2025 Paula Stock (GFZ) <paula.stock@gfz.de>
//
// SPDX-License-Identifier: Apache-2.0

import Stack from '@mui/material/Stack'


import CreateAccessToken from './CreateRsdAccessToken'
import {useAccessTokens} from './useAccessTokens'
import AccessTokenList from './AccessTokenList'

export default function UserAccessTokensPage() {
  const {loading,activeTokens,createToken,deleteToken} = useAccessTokens()

  return (
    <Stack spacing={4}>
      <h2>API Access Tokens</h2>
      <section className="flex-1 flex flex-col gap-8 xl:grid xl:grid-cols-[2fr_2fr]">
        <div className="order-2 xl:order-1">
          <h2 className="flex pr-4 pb-4 justify-between font-medium">
            <span>Your Access Tokens</span>
            <span>{activeTokens.length}</span>
          </h2>
          <AccessTokenList
            tokens={activeTokens}
            onDelete={deleteToken}
            loading={loading}
          />
        </div>
        <div className="order-1 xl:order-2">
          <CreateAccessToken createAccessToken={createToken} />
        </div>
      </section>
    </Stack>
  )
}
