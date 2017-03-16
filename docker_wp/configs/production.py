from .base import *

DATABASES['default']['HOST'] = get_env_variable('DATABASE_PASSWORD')
DATABASES['default']['NAME'] = get_env_variable('DATABASE_NAME')
DATABASES['default']['USER'] = get_env_variable('DATABASE_USER')
DATABASES['default']['PASSWORD'] = get_env_variable('DATABASE_PASSWORD')

DEBUG = False
