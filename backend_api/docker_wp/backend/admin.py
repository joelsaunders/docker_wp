from django.contrib import admin
from docker_wp.backend import models
# Register your models here.

models_list = [models.BlogPost]

admin.site.register(models_list)


