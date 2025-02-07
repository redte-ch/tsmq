import t from 'tap'
import type { Guard, Result } from '../../../../src/utils/fp/result.ts'
import {
  failed,
  failure,
  match,
  succeed,
  success
} from '../../../../src/utils/fp/result.ts'

t.test('Either', (t) => {
  const error = 'Cannot divide by zero'
  const divide = (a: number, b: number): Result<string, number> =>
    b === 0 ? failure(error) : success(a / b)

  t.test('When it divides by zero', (t) => {
    const result = divide(Math.random(), 0)
    t.same(result, { _tag: 'Failure', error })
    t.end()
  })

  t.test('When it does not divide by zero', (t) => {
    const numerator = Math.random()
    const denominator = Math.random() + 1
    const result = divide(numerator, denominator)
    t.same(result, { _tag: 'Success', value: numerator / denominator })
    t.end()
  })

  t.end()
})

t.test('failed/1', (t) => {
  t.test('When checked with "failed"', (t) => {
    t.ok(failed({ _tag: 'Failure', error: 'error' }))
    t.notOk(failed({ _tag: 'Success', value: 1 }))
    t.end()
  })

  t.end()
})

t.test('succeed/1', (t) => {
  t.test('When checked with "succeed"', (t) => {
    t.ok(succeed({ _tag: 'Success', value: 1 }))
    t.notOk(succeed({ _tag: 'Failure', error: 'error' }))
    t.end()
  })

  t.end()
})

t.test('match/2', (t) => {
  const matchNumber: Guard<string, number, string> = match(
    (e) => `${e}`,
    (a) => `${a}`
  )

  t.test('When it fails', (t) => {
    t.equal(matchNumber(failure('error')), 'error')
    t.end()
  })

  t.test('When it succeeds', (t) => {
    t.equal(matchNumber(success(1)), '1')
    t.end()
  })

  t.end()
})
