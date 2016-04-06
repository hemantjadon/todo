from django.shortcuts import render,redirect
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from user.models import AuthUser

class APIRoot(generics.GenericAPIView):
	queryset = AuthUser.objects.all()
	def get(self,request,format=None):
		return Response({
			'users': reverse('user-list', request=request, format=format),
		})

def HomePage(request):
    return render(request,'index.html',{})