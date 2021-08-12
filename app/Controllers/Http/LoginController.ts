import View from '@ioc:Adonis/Core/View'

export default class LoginController {
  public async get() {
    const data = {}
    const html = await View.render('pages/login/get', data)
    return html
  }

  public async post({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      response.redirect('/')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
