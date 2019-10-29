import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { DbIntance } from '../api/DbInstance'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req: any, res: any) => {
    const parsedUrl = parse(req.url!, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/login') {
      app.render(req, res, '/login', query)
    } else if (pathname === '/register') {
      app.render(req, res, '/register', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port)
  const db = DbIntance.getinstance()
  console.log(db)

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})
