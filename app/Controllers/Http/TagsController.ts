import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class TagsController {
  public async index(ctx: HttpContextContract) {
    const data = {}
    const html = await View.render('pages/tags/index', data)
    return html
  }
}
