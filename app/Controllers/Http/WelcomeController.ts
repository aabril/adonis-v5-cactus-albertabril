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
const projects = [
  {
    "linkurl": "/projects/hugo",
    "linkname": "Hugo",
    "linkdesc": "The world’s fastest framework for building websites."
  },
  {
    "linkurl": "/projects/hugo-themes",
    "linkname": "Hugo Themes",
    "linkdesc": "A curated directory of Hugo themes."
  },

]

export default class WelcomeController {
  public async index({auth}) {
    const data = {
      writings,
      projects
    }

    // this will keep away any user that has not been authenticated
    // await auth.use('web').authenticate()

    // this allows everyuser to access
    // and also add extras to authenticated users
    await auth.use('web').check()
    if (auth.use('web').isLoggedIn) {
      data["auth"] = auth
    }

    const html = await View.render('pages/welcome', data)
    return html
  }
}
