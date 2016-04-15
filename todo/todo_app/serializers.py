from rest_framework import serializers
from rest_framework.reverse import reverse
from todo_app.models import Todo,TodoListElement
from user.models import AuthUser

class CustomHyperlinkedIdentityField(serializers.HyperlinkedIdentityField):
	
	def get_url(self, obj, view_name, request, format):
		url_kwargs = {
			'todoID': obj.todo.id,
			'pk': obj.id
		}
		return reverse(view_name, kwargs=url_kwargs, request=request, format=format)

	def get_object(self, view_name, view_args, view_kwargs):
		lookup_kwargs = {
			'todo__id': view_kwargs['todoID'],
			'pk': view_kwargs['id']
		}
		return self.get_queryset().get(**lookup_kwargs)

class CustomAuthorHyperlinkIdentityField(serializers.HyperlinkedIdentityField):
		def get_url(self, obj, view_name, request, format):
			url_kwargs = {
				'pk': obj.owner.pk
			}
			return reverse(view_name, kwargs=url_kwargs, request=request, format=format)
		def get_object(self, view_name, view_args, view_kwargs):
			lookup_kwargs = {
				'pk': view_args['pk']
			}
			return self.get_queryset().get(**lookup_kwargs)
		
class TodoListElementSerializer(serializers.HyperlinkedModelSerializer):
	url = CustomHyperlinkedIdentityField(view_name='todo-list-element-detail',lookup_field='pk')
	todo = serializers.HyperlinkedIdentityField(view_name='todo-detail',lookup_field='pk')
	
	class Meta:
		model = TodoListElement
		fields = ('url','id','timestamp','todo','is_checked','title')

class TodoSerializer(serializers.HyperlinkedModelSerializer):
	url = serializers.HyperlinkedIdentityField(view_name='todo-detail',lookup_field='pk')
	owner = CustomAuthorHyperlinkIdentityField(view_name='user-detail')
	list = TodoListElementSerializer(read_only=True,many=True)
    
	class Meta:
		model = Todo
		fields = ('url','id','timestamp','owner','title','list')
