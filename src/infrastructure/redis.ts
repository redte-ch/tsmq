import { createClient } from 'redis'
import type { RedisClientType } from 'redis'
import type { Result } from '../utils/fp/result.ts'
import { failure, success } from '../utils/fp/result.ts'

/** Default Redis URL. */
const defaultURL = 'redis://localhost:6379'

/** Connect to Redis. */
const connect = async (
  url: string = defaultURL
): Promise<Result<Error, RedisClientType>> => {
  try {
    const client = await createClient({ url }).connect()
    return success(client as RedisClientType) // Needed because type is dynamic.
  } catch (error) {
    return failure(error instanceof Error ? error : new Error(`${error}`))
  }
}

export { connect }
