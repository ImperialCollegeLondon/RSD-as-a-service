// SPDX-FileCopyrightText: 2025 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2025 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

export const config = {
  title: 'Software Heritage',
  subtitle:'List of unique identifiers for archived software',
  modal: {
    swhid: {
      label: 'SWHID',
      help: 'Provide unique identifier from Software Heritage',
      validation: {
        required: 'Unique identifier from Software Heritage is required',
        maxLength: {
          value: 1000,
          message: 'Maximum length is 1000'
        },
        pattern: {
          value: /^swh:1:(snp|rel|rev|dir|cnt):[0-9a-f]{40}(;(origin=[^\s;]+|visit=swh:1:(snp|rel|rev|dir|cnt):[0-9a-f]{40}|anchor=swh:1:(snp|rel|rev|dir|cnt):[0-9a-f]{40}|path=[^\s;]+|lines=\d+(-\d+)?))*$/,
          message: 'Invalid swh value.'
        }
      }
    }
  }
}
