from django.contrib import admin
from todo_app.models import Todo,TodoListElement

# Register your models here.

admin.site.register(Todo)
admin.site.register(TodoListElement)
