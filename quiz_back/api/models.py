from django.contrib.auth.models import User
from django.db import models

class ContactManager(models.Manager):
    def for_user(self, user):
        return self.filter(owner=user)

class Contact(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    name = models.CharField('Name',max_length=60)
    phone = models.CharField('Phone',max_length=30)
