import webapp2
import jinja2
import os

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

mainArr = []

class MainPage(webapp2.RequestHandler):
    def get(self):  # for a get request
        template = jinja_env.get_template('html/index.html')
        self.response.write(template.render({"mainArr": mainArr}))  # the response

    def post(self):
        imgUrl = self.request.get("imgUrl")
        name = self.request.get("name")
        link = self.request.get("link")
        obj = {
            "imgUrl": imgUrl,
            "name": name,
            "link": link
        }

        mainArr.append(obj)
        template = jinja_env.get_template('html/index.html')
        self.response.write(template.render({"mainArr": mainArr}))  # the response

class addProject(webapp2.RequestHandler):
    def get(self):  # for a get request
        template = jinja_env.get_template('html/addProject.html')
        self.response.write(template.render())  # the response

# the app configuration section
app = webapp2.WSGIApplication([
  ('/', MainPage),
  ("/secret", addProject)
], debug=True)
