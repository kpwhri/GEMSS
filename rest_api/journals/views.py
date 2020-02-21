from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from journals.models import Journal
from journals.serializers import JournalSerializer, UserSerializer

@api_view(['GET'])
def api_root(request, format=None):
  return Response({
    'users': reverse('user-list', request=request, format=format),
    'journals': reverse('journal-list', request=request, format=format)
  })

class JournalViewSet(viewsets.ModelViewSet):
  """
  This viewset automatically provide 'list', 'detail', 'create', 'retrieve',
  and 'destroy' actions.
  """
  queryset = Journal.objects.all()
  serializer_class = JournalSerializer

  def perform_create(self, serializer):
    serializer.save(user=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
  """
  This viewset automatically provides 'list' and 'detail' actions
  """
  queryset = User.objects.all()
  serializer_class = UserSerializer
