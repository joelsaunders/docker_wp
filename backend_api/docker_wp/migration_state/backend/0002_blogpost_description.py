# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-23 10:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='description',
            field=models.TextField(default='No post description'),
        ),
    ]
