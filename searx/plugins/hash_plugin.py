from flask_babel import gettext
import hashlib
import re

name = "Hash plugin"
description = gettext("Converts strings to different hash digests.")
default_on = True

parser_re = re.compile('(md5|sha1|sha224|sha256|sha384|sha512) (.*)', re.I)


def post_search(request, search):
    # process only on first page
    if search.search_query.pageno > 1:
        return True
    m = parser_re.match(search.search_query.query)
    if not m:
        # wrong query
        return True

    function, string = m.groups()
    if string.strip().__len__() == 0:
        # end if the string is empty
        return True

    # select hash function
    f = hashlib.new(function.lower())

    # make digest from the given string
    f.update(string.encode('utf-8').strip())
    answer = function + " " + gettext('hash digest') + ": " + f.hexdigest()

    # print result
    search.result_container.answers.clear()
    search.result_container.answers['hash'] = {'answer': answer}
    return True
