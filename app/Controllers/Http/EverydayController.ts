import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class CommitController {
  public async index() {
    const data = {}
    const html = await View.render('pages/everyday/index', data)
    return html
  }
}
