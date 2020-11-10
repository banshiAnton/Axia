from flask_babel import gettext
import re
name = gettext('Self Informations')
description = gettext('Displays your IP if the query is "ip" and your user agent if the query contains "user agent".')
default_on = True


# Self User Agent regex
p = re.compile('.*user[ -]agent.*', re.IGNORECASE)


# attach callback to the post search hook
#  request: flask request object
#  ctx: the whole local context of the pre search hook
def post_search(request, search):
    if search.search_query.pageno > 1:
        return True
    if search.search_query.query == 'ip':
        x_forwarded_for = request.headers.getlist("X-Forwarded-For")
        if x_forwarded_for:
            ip = x_forwarded_for[0]
        else:
            ip = request.remote_addr
        search.result_container.answers['ip'] = {'answer': ip}
    elif p.match(search.search_query.query):
        ua = request.user_agent
        search.result_container.answers['user-agent'] = {'answer': ua}
    return True
