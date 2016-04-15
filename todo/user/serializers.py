from rest_framework import serializers
from user.models import AuthUser
from todo_app.models import Todo

class UserSerializer(serializers.HyperlinkedModelSerializer):
	todos = serializers.HyperlinkedIdentityField(view_name='todo-detail',many=True)
	url = serializers.HyperlinkedIdentityField(view_name='user-detail')

	class Meta:
		model = AuthUser
		fields = ('url','id','username','email','is_staff','todos')