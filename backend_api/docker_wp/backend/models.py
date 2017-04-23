from django.contrib.auth.models import User
from django.db import models


class AutoTimestamp(models.Model):
    """
    provides created and last modified dates
    """
    created = models.DateTimeField(db_index=True, auto_now_add=True)
    modified = models.DateTimeField(db_index=True, auto_now=True)

    class Meta:
        abstract = True


class BlogPost(AutoTimestamp):
    """
    Post model for blog section of website
    """
    title = models.CharField(max_length=100)
    body = models.TextField()
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    picture = models.TextField()
    description = models.TextField(default='No post description')
