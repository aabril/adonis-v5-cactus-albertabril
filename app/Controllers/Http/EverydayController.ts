import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

const days = [
  {
    'datetime': '2021-08-11 09:00:00 +0000 UTC',
    'datestr':  '2021-08-11',
    'link':     '/everyday/2021-08-11',
    'linkname': 'adonis-cactus'
  },
  {
    'datetime': '2020-08-12 09:00:00 +0000 UTC',
    'datestr':  '2020-08-12',
    'link':     '/everyday/2021-08-12',
    'linkname': 'adonis-cactus-albertabril'
  }
]

export default class CommitController {
  public async index() {
    const data = {
      days
    }
    const html = await View.render('pages/everyday/index', data)
    return html
  }

  public async month({ params } {
    const data = {
      days
    }
    const html = await View.render('pages/everyday/month', data)
    return html
  })
}
