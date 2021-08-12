import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class AboutController {
  public async index(ctx: HttpContextContract) {
    const data = {}
    const html = await View.render('about', data)
    return html
  }
}
