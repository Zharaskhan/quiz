from api.models import Contact
from rest_framework import generics
from api.serializer import ContactSerializer
from rest_framework.permissions import IsAuthenticated



class ContactList(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Contact.objects.all().filter(owner=self.request.user)


class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'pk'
