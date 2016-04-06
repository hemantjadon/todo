from django.shortcuts import render
from todo_app.serializers import TodoSerializer,TodoListElementSerializer
from todo_app.models import Todo,TodoListElement

from rest_framework import generics
from rest_framework import permissions

from todo_app.permissions import IsAnonymous,IsSelf
# Create your views here.

#-----------------------------------------------# 
#----------------Todo API Views-----------------#
#-----------------------------------------------# 

class TodoList(generics.ListAPIView):
	permission_classes = ([permissions.IsAuthenticated])
	serializer_class = TodoSerializer
	def get_queryset(self):
		return Todo.objects.filter(owner=self.request.user)

class TodoCreate(generics.CreateAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer
	permission_classes = ([permissions.IsAuthenticated])
	
	def perform_create(self,serializer):
		serializer.save(owner = self.request.user)

class TodoDetail(generics.RetrieveAPIView):
	serializer_class = TodoSerializer
	permission_classes = ([IsSelf])
	def get_queryset(self):
		return Todo.objects.filter(owner=self.request.user)

class TodoUpdate(generics.UpdateAPIView):
	serializer_class = TodoSerializer
	permission_classes = ([IsSelf])
	def get_queryset(self):
		return Todo.objects.filter(owner=self.request.user)
	
class TodoDelete(generics.DestroyAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer
	permission_classes = ([IsSelf])
	def get_queryset(self):
		return Todo.objects.filter(owner=self.request.user)
	
	 
#--------------------X-X-X----------------------#

	

#-----------------------------------------------# 
#----------Todo List Elements API Views---------#
#-----------------------------------------------# 

class TodoListElementList(generics.ListAPIView):
	serializer_class = TodoListElementSerializer
	permission_classes = ([IsSelf])
	def get_queryset(self):
		todoID = self.kwargs['todoID']
		try:
			todo = Todo.objects.get(pk=todoID,owner=self.request.user)
			return TodoListElement.objects.filter(todo = todo)
		except Todo.DoesNotExist:
			todo = None
			return TodoListElement.objects.none()
	
class TodoListElementCreate(generics.CreateAPIView):
	queryset = TodoListElement.objects.all()
	serializer_class = TodoListElementSerializer
	
class TodoListElementDetail(generics.RetrieveAPIView):
	serializer_class = TodoListElementSerializer
	permission_classes = ([IsSelf])
	def get_queryset(self):
		todoID = self.kwargs['todoID']
		try:
			todo = Todo.objects.get(pk=todoID,owner = self.request.user)
			return TodoListElement.objects.filter(todo = todo)
		except Todo.DoesNotExist:
			todo = None
			return TodoListElement.objects.none()
	
class TodoListElementUpdate(generics.UpdateAPIView):
	serializer_class = TodoListElementSerializer
	def get_queryset(self):
		todoID = self.kwargs['todoID']
		try:
			todo = Todo.objects.get(pk=todoID)
			return TodoListElement.objects.filter(todo = todo)
		except Todo.DoesNotExist:
			todo = None
			return TodoListElement.objects.none()
	
class TodoListElementDelete(generics.DestroyAPIView):
	serializer_class = TodoListElementSerializer
	def get_queryset(self):
		todoID = self.kwargs['todoID']
		try:
			todo = Todo.objects.get(pk=todoID)
			return TodoListElement.objects.filter(todo = todo)
		except Todo.DoesNotExist:
			todo = None
			return TodoListElement.objects.none()
 	
#--------------------X-X-X----------------------#