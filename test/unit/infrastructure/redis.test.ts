import type { RedisClientType } from 'redis'
import { test } from 'tap'
import { connect } from '../../../src/infrastructure/redis.ts'
import type { Failure, Success } from '../../../src/utils/fp/result.ts'
import { failed, succeed } from '../../../src/utils/fp/result.ts'

test('Connect to Redis OK', async (t) => {
  const result = (await connect()) as Success<RedisClientType>
  t.ok(succeed(result))
  t.end()
  await result.value.quit()
})

test('Connect to Redis KO', async (t) => {
  const result = (await connect('radin://nohost:noport')) as Failure<Error>
  t.ok(failed(result))
  t.end()
})
