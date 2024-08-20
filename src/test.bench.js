const Benchmark = require('@perfsee/package')

Benchmark('foo', () => {
  bar()
})

Benchmark('bar', [
  {
    test: () => {
      baz()
    },
    options: { name: 'baz' },
  },
  {
    test: async () => {
      await setup()
      return () => {
        quz()
      }
    },
    options: { name: 'quz with async setup' },
  },
])