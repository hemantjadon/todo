from django.db import models
from user.models import AuthUser
import uuid

# Create your models here.

class Todo(models.Model):
	id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
	owner = models.ForeignKey(AuthUser,related_name='todos')
	timestamp = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100,null=True,blank=False)
	
	class Meta:
		ordering = ['-timestamp']
	
	def __str__(self):
		return self.title

class TodoListElement(models.Model):
	id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
	todo = models.ForeignKey(Todo,related_name='list')
	timestamp = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100,null=True,blank=False)
	
	class Meta:
		ordering = ['timestamp']
	
	def __str__(self):
		return self.title