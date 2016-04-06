from django.conf.urls import url,include
from todo_app import views

urlpatterns = [
	url(r'^$', views.TodoList.as_view(),name='todo-list'),
    url(r'^create/$',views.TodoCreate.as_view(),name='todo-create'),
	url(r'^(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/$', views.TodoDetail.as_view(),name='todo-detail'),
    url(r'^(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/update/$', views.TodoUpdate.as_view(),name='todo-update'),
    url(r'^(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/delete/$', views.TodoDelete.as_view(),name='todo-delete'),
    
    url(r'^(?P<todoID>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/todo-list/$', views.TodoListElementList.as_view(),name='todo-list-element-list'),
    url(r'^todo-list/create/$',views.TodoListElementCreate.as_view(),name='todo-list-element-create'),
	url(r'^(?P<todoID>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/todo-list/(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/$', views.TodoListElementDetail.as_view(),name='todo-list-element-detail'),
    url(r'^(?P<todoID>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/todo-list/(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/update/$', views.TodoListElementUpdate.as_view(),name='todo-list-element-list-update'),
    url(r'^(?P<todoID>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/todo-list/(?P<pk>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/delete/$', views.TodoListElementDelete.as_view(),name='todo-list-element-delete'),
]