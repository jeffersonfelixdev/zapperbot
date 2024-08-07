import fs from 'node:fs'
import path from 'node:path'

import Handlebars from 'handlebars'

// Register partials
const partialsDir = path.join(__dirname, 'templates', 'partials')
const filenames = fs.readdirSync(partialsDir)

filenames.forEach((filename) => {
  const matches = /^([^.]+).hbs$/.exec(filename)
  if (!matches) {
    return
  }
  const name = matches[1]
  const template = fs.readFileSync(
    path.join(__dirname, 'templates', 'partials', filename),
    'utf-8',
  )
  Handlebars.registerPartial(name, template)
})

const layout = fs.readFileSync(
  path.join(__dirname, 'templates', 'main-layout.hbs'),
  'utf-8',
)

// Function to compile a template
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compileTemplate = (filename: string, data: any) => {
  const html = fs.readFileSync(
    path.join(__dirname, 'templates', filename),
    'utf-8',
  )
  const compiledTemplate = Handlebars.compile(html)
  const htmlBody = compiledTemplate(data)
  const compiledLayout = Handlebars.compile(layout)
  return compiledLayout({ ...data, body: htmlBody })
}

export { compileTemplate }
