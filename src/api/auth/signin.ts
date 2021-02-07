const queryString = require('query-string')
const fetch = require('node-fetch')

export const signin = async (username: string, password: string) => {
  const queryParams = {
    grant_type: 'password',
    username,
    password,
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/oauth/token?${queryString.stringify(
      queryParams,
    )}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from('factory:').toString('base64'),
      },
    },
  )

  return res
}
