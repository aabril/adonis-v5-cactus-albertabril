import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

const writings = [
  {
    'datetime': '2021-06-27 09:00:00 +0000 UTC',
    'datestr':  '2021-06-27',
    'link':     '/posts/code-block-test',
    'linkname': 'Code Block Test'
  },
  {
    'datetime': '2020-06-06 09:00:00 +0000 UTC',
    'datestr':  '2020-06-06',
    'link':     '/posts/2020-06-06-changes-in-java-string',
    'linkname': 'Changes to String in java (from 1.7.0_06)'
  },
  {
    'datetime': '2020-05-01 09:00:00 +0000 UTC',
    'datestr':  '2020-05-01',
    'link':     '/posts/2020-05-01-algorithms-graphs',
    'linkname': 'Algorithms - Graphs'
  },
  {
    'datetime': '2020-04-29 09:00:00 +0000 UTC',
    'datestr':  '2020-04-29',
    'link':     '/posts/2020-04-29-subtyping',
    'linkname': 'Programming Language - Subtyping'
  }
]

export default class WelcomeController {
  public async index(ctx: HttpContextContract) {

    const html = await View.render('welcome', {
      writings: writings
    })
    
    return html
  }
}
