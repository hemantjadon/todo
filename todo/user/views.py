from django.shortcuts import render
from django.http import JsonResponse,HttpResponse

from user.serializers import UserSerializer
from user.models import AuthUser

from rest_framework import generics
from rest_framework import permissions

from user.permissions import IsAnonymous,IsSelf

# Create your views here.

class UserList(generics.ListAPIView):
	permission_classes = ([permissions.IsAuthenticated])
	queryset = AuthUser.objects.all()
	serializer_class = UserSerializer

class UserCreate(generics.CreateAPIView):
	permission_classes = ([IsAnonymous])
	queryset = AuthUser.objects.all()
	serializer_class = UserSerializer
	
class UserRetrieve(generics.RetrieveAPIView):
	permission_classes = ([IsSelf])
	queryset = AuthUser.objects.all()
	serializer_class = UserSerializer
	
class UserUpdate(generics.UpdateAPIView):
	permission_classes = ([IsSelf])
	queryset = AuthUser.objects.all()
	serializer_class = UserSerializer
	
class UserDelete(generics.DestroyAPIView):
	permission_classes = ([IsSelf])
	queryset = AuthUser.objects.all()
	serializer_class = UserSerializer
	
	
	
#--------------------------------------------------#
#-------------- Authentication Views --------------#
#--------------------------------------------------#

def CheckAuthentication(request):
	status = request.user.is_authenticated()
	if(status == True):
		data = {}
		fields = {}
		fields['pk'] = request.user.pk
		fields['username'] = request.user.username
		fields['email'] = request.user.email
		fields['first_name'] = request.user.first_name
		fields['last_name'] = request.user.last_name
		fields['is_active'] = request.user.is_active
		fields['is_staff'] = request.user.is_staff
		data['status'] = status
		data['fields'] = fields
		return JsonResponse({"data":data})
	else:
		data = {}
		data['status'] = status
		data['fields'] = {}
		return JsonResponse({"data":data})

#---------------------X-X-X------------------------#