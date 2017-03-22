import dj_database_url
from .base import *

SELF_HOST = 'https://joelsaunders.herokuapp.com/'

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

DEBUG = False
