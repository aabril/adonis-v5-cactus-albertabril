import View from '@ioc:Adonis/Core/View'

export default class LoginController {
  public async loginGet() {
    const data = {}
    const html = await View.render('pages/login/get', data)
    return html
  }

  public async loginPost({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      response.redirect('/')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logoutGet ({ auth, response }) {
    await auth.use('web').logout()
    response.redirect('/')
  }

}
